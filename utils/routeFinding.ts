import { countries } from '../data/countries';

export interface BorderCrossing {
  id: string;
  name: string;
  fromCountry: string;
  toCountry: string;
  requirements: {
    documents: string[];
    vehicleRequirements: string[];
    restrictions: string[];
  };
  status: 'open' | 'closed' | 'restricted';
  waitTime?: number;
  lastUpdated: Date;
}

export interface RouteSuggestion {
  route: string[];
  totalBorders: number;
  allBordersOpen: boolean;
  estimatedTime: number;
  details: {
    from: string;
    to: string;
    via: string[];
  };
}

export function findAlternativeRoutes(
  fromCountryId: string,
  toCountryId: string,
  maxHops: number = 2
): RouteSuggestion[] {
  const fromCountry = countries.find(c => c.id === fromCountryId);
  const toCountry = countries.find(c => c.id === toCountryId);
  
  if (!fromCountry || !toCountry) return [];

  // Check if direct border exists and is open
  const directBorder = fromCountry.borderCrossings.find(
    crossing => crossing.toCountry === toCountryId && crossing.status === 'open'
  );

  if (directBorder) {
    return [
      {
        route: [fromCountryId, toCountryId],
        totalBorders: 1,
        allBordersOpen: true,
        estimatedTime: directBorder.waitTime || 60,
        details: {
          from: fromCountry.name,
          to: toCountry.name,
          via: []
        }
      }
    ];
  }

  // Find alternative routes through neighboring countries
  const alternatives: RouteSuggestion[] = [];
  
  // Single hop alternatives (through one intermediate country)
  fromCountry.neighbors.forEach(neighborId => {
    const neighbor = countries.find(c => c.id === neighborId);
    if (!neighbor) return;

    const borderToNeighbor = fromCountry.borderCrossings.find(
      crossing => crossing.toCountry === neighborId && crossing.status === 'open'
    );
    
    const borderFromNeighbor = neighbor.borderCrossings.find(
      crossing => crossing.toCountry === toCountryId && crossing.status === 'open'
    );

    if (borderToNeighbor && borderFromNeighbor) {
      alternatives.push({
        route: [fromCountryId, neighborId, toCountryId],
        totalBorders: 2,
        allBordersOpen: true,
        estimatedTime: (borderToNeighbor.waitTime || 60) + (borderFromNeighbor.waitTime || 60),
        details: {
          from: fromCountry.name,
          to: toCountry.name,
          via: [neighbor.name]
        }
      });
    }
  });

  // Two hop alternatives (through two intermediate countries) if no direct or single-hop routes found
  if (alternatives.length === 0 && maxHops >= 2) {
    fromCountry.neighbors.forEach(firstHopId => {
      const firstHop = countries.find(c => c.id === firstHopId);
      if (!firstHop) return;

      const borderToFirstHop = fromCountry.borderCrossings.find(
        crossing => crossing.toCountry === firstHopId && crossing.status === 'open'
      );
      
      if (!borderToFirstHop) return;

      firstHop.neighbors.forEach(secondHopId => {
        if (secondHopId === fromCountryId) return; // Avoid going back
        
        const secondHop = countries.find(c => c.id === secondHopId);
        if (!secondHop) return;

        const borderFirstToSecond = firstHop.borderCrossings.find(
          crossing => crossing.toCountry === secondHopId && crossing.status === 'open'
        );
        
        const borderSecondToTarget = secondHop.borderCrossings.find(
          crossing => crossing.toCountry === toCountryId && crossing.status === 'open'
        );

        if (borderFirstToSecond && borderSecondToTarget) {
          alternatives.push({
            route: [fromCountryId, firstHopId, secondHopId, toCountryId],
            totalBorders: 3,
            allBordersOpen: true,
            estimatedTime: (borderToFirstHop.waitTime || 60) + 
                         (borderFirstToSecond.waitTime || 60) + 
                         (borderSecondToTarget.waitTime || 60),
            details: {
              from: fromCountry.name,
              to: toCountry.name,
              via: [firstHop.name, secondHop.name]
            }
          });
        }
      });
    });
  }

  // Sort by estimated time (fastest first)
  return alternatives.sort((a, b) => a.estimatedTime - b.estimatedTime);
}

export function getBorderStatus(fromCountryId: string, toCountryId: string): {
  status: 'open' | 'closed' | 'restricted' | 'no-border';
  crossing: BorderCrossing | null;
} {
  const fromCountry = countries.find(c => c.id === fromCountryId);
  if (!fromCountry) return { status: 'no-border', crossing: null };

  const crossing = fromCountry.borderCrossings.find(c => c.toCountry === toCountryId);
  
  if (!crossing) return { status: 'no-border', crossing: null };
  
  return { status: crossing.status, crossing };
}

/**
 * Validates border crossings between all countries to ensure data integrity
 * Checks for bidirectional relationships and minimum crossing requirements
 * @returns Array of validation errors, empty if all validations pass
 */
export function validateBorderCrossings(): string[] {
  const errors: string[] = [];
  
  countries.forEach(country => {
    country.neighbors.forEach(neighborId => {
      const neighbor = countries.find(c => c.id === neighborId);
      if (!neighbor) {
        errors.push(`Country ${country.name} has invalid neighbor: ${neighborId}`);
        return;
      }
      
      // Check if country has crossings to this neighbor
      const crossingsToNeighbor = country.borderCrossings.filter(
        crossing => crossing.toCountry === neighborId
      );
      
      // Check for minimum 2 crossings per neighbor (where possible)
      if (crossingsToNeighbor.length < 2) {
        errors.push(`Country ${country.name} has only ${crossingsToNeighbor.length} crossings to ${neighbor.name} (minimum 2 required)`);
      }
      
      // Check bidirectional relationship - neighbor should also list this country as neighbor
      if (!neighbor.neighbors.includes(country.id)) {
        errors.push(`Bidirectional relationship error: ${neighbor.name} does not list ${country.name} as neighbor`);
      }
      
      // Check if neighbor has crossings back to this country
      const reverseCrossings = neighbor.borderCrossings.filter(
        crossing => crossing.toCountry === country.id
      );
      
      if (reverseCrossings.length === 0) {
        errors.push(`No return crossings from ${neighbor.name} to ${country.name}`);
      }
    });
  });

  // Additional validation: Check for duplicate crossing IDs
  const allCrossingIds = countries.flatMap(country => 
    country.borderCrossings.map(crossing => crossing.id)
  );
  
  const duplicateIds = allCrossingIds.filter((id, index) => 
    allCrossingIds.indexOf(id) !== index
  );
  
  if (duplicateIds.length > 0) {
    errors.push(`Duplicate crossing IDs found: ${duplicateIds.join(', ')}`);
  }

  return errors;
}

/**
 * Gets all border crossings between two specific countries
 * @param countryId1 First country ID
 * @param countryId2 Second country ID
 * @returns Array of border crossings in both directions
 */
export function getCrossingsBetweenCountries(countryId1: string, countryId2: string): BorderCrossing[] {
  const country1 = countries.find(c => c.id === countryId1);
  const country2 = countries.find(c => c.id === countryId2);
  
  if (!country1 || !country2) return [];
  
  const crossingsFrom1to2 = country1.borderCrossings.filter(
    crossing => crossing.toCountry === countryId2
  );
  
  const crossingsFrom2to1 = country2.borderCrossings.filter(
    crossing => crossing.toCountry === countryId1
  );
  
  return [...crossingsFrom1to2, ...crossingsFrom2to1];
}