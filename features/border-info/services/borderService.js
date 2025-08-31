// This is mock data - in a real app, this would come from a server
const mockBorders = [
  {
    id: 'us-can-peace-arch',
    name: 'Peace Arch Border Crossing',
    countries: ['USA', 'Canada'],
    status: 'open',
    hours: '24/7',
    waitTime: '15 min',
    documents: ['Passport', 'Visa (if required)'],
    fees: 'None',
    notes: 'NEXUS lane available',
    coordinates: { lat: 48.9989, lng: -122.7578 },
  },
  {
    id: 'fr-ger-strasbourg',
    name: 'Strasbourg Border Crossing',
    countries: ['France', 'Germany'],
    status: 'open',
    hours: '6:00 AM - 10:00 PM',
    waitTime: '5 min',
    documents: ['Passport or ID card'],
    fees: 'None',
    notes: 'Fast lane for EU citizens',
    coordinates: { lat: 48.5833, lng: 7.75 },
  },
  {
    id: 'th-mal-bukit-kayu-hitam',
    name: 'Bukit Kayu Hitam Border',
    countries: ['Thailand', 'Malaysia'],
    status: 'open',
    hours: '7:00 AM - 10:00 PM',
    waitTime: '30 min',
    documents: ['Passport'],
    fees: 'None',
    notes: 'Major crossing for northern Malaysia',
    coordinates: { lat: 6.4938, lng: 100.4257 },
  },
];
// This function gets information about a specific border
export const getBorderInfo = async (borderId) => {
  // In a real app, this would be an API call to a server
  return mockBorders.find(border => border.id === borderId);
};
// This function gets borders near a location
export const getNearestBorders = async (latitude, longitude) => {
  // In a real app, this would calculate distances based on coordinates
  // For now, we'll just return all borders
  return mockBorders;
};
// This function checks if the feature is enabled
export const isBorderInfoEnabled = () => {
  // Since we removed the feature flags, we'll just return true
  return true;
};
