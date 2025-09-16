console.log('Borders.tsx file is loading');
import React, { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import BorderCrossingList from '../../components/borders/BorderCrossingList';
import NeighborList from '../../components/borders/NeighborList';
import { countries } from '../../data/countries';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { getCountryFromCoords } from '../../utils/geocoding';

export default function BordersScreen() {
  const [currentCountry, setCurrentCountry] = useState<string | null>(null);
  const [selectedNeighbor, setSelectedNeighbor] = useState<string | null>(null);
  const [isDetectingLocation, setIsDetectingLocation] = useState(true);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);
  
  const { location, errorMsg } = useCurrentLocation();

  // Create memoized versions of the coordinates
  const latitude = useMemo(() => location?.coords?.latitude, [location]);
  const longitude = useMemo(() => location?.coords?.longitude, [location]);

  useEffect(() => {
    const detectCountry = async () => {
      // Check if we have valid coordinates
      if (latitude !== undefined && longitude !== undefined) {
        try {
          const countryCode = await getCountryFromCoords(latitude, longitude);
          if (countryCode) {
            const countryId = countryCode.toLowerCase();
            const countryExists = countries.some(c => c.id === countryId);
            
            if (countryExists) {
              setCurrentCountry(countryId);
            } else {
              setGeolocationError('Your current location is not yet supported in our database');
            }
          } else {
            setGeolocationError('Could not determine your current country');
          }
        } catch (error) {
          setGeolocationError('Error detecting your location. Please check your connection.');
          console.error('Location detection error:', error);
        } finally {
          setIsDetectingLocation(false);
        }
      } else if (errorMsg) {
        // Handle case where we have an error message
        setGeolocationError(errorMsg);
        setIsDetectingLocation(false);
      } else {
        // If neither location nor errorMsg is available, we're still loading
        setIsDetectingLocation(true);
      }
    };

    detectCountry();
  }, [latitude, longitude, errorMsg, countries]);

  const handleSelectNeighbor = (countryId: string) => {
    setSelectedNeighbor(countryId);
  };

  const selectedCountry = countries.find(c => c.id === currentCountry);
  const selectedNeighborCountry = countries.find(c => c.id === selectedNeighbor);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Border Crossing Information</Text>
      
      {isDetectingLocation && (
        <Text style={styles.loadingText}>Detecting your current location...</Text>
      )}
      
      {geolocationError && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{geolocationError}</Text>
          <Text style={styles.errorSubtext}>
            Use the Plan screen for multi-country route planning.
          </Text>
        </View>
      )}
      
      {currentCountry && (
        <View style={styles.currentLocation}>
          <Text style={styles.currentLocationTitle}>Your Current Location:</Text>
          <Text style={styles.currentLocationName}>{selectedCountry?.name}</Text>
        </View>
      )}
      
      {currentCountry && (
        <NeighborList 
          currentCountry={currentCountry} 
          onSelectNeighbor={handleSelectNeighbor} 
        />
      )}
      
      {currentCountry && selectedNeighbor && selectedCountry && (
        <View style={styles.borderInfo}>
          <Text style={styles.subHeader}>
            Crossing from {selectedCountry.name} to {selectedNeighborCountry?.name}
          </Text>
          <BorderCrossingList 
            fromCountry={currentCountry}
            toCountry={selectedNeighbor}
          />
        </View>
      )}

      {!currentCountry && !isDetectingLocation && !geolocationError && (
        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Cannot detect your location?</Text>
          <Text style={styles.helpText}>
            Use the Plan screen to explore border crossing information between any countries,
            or check your device location settings and try again.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  loadingText: {
    textAlign: 'center',
    padding: 16,
    fontStyle: 'italic',
  },
  currentLocation: {
    padding: 20,
    backgroundColor: '#e8f5e8',
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  currentLocationTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  currentLocationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  errorContainer: {
    backgroundColor: '#ffeeee',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ffcccc',
  },
  errorText: {
    color: '#cc0000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  errorSubtext: {
    color: '#cc0000',
    textAlign: 'center',
    marginTop: 8,
  },
  borderInfo: {
    flex: 1,
    margin: 16,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
  },
  helpSection: {
    padding: 20,
    backgroundColor: '#e3f2fd',
    margin: 16,
    borderRadius: 8,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  helpText: {
    fontSize: 14,
  },
});