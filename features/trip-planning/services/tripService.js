import { FEATURE_FLAGS } from '../../../config/features';

// This is mock data - in a real app, this would come from a server
const mockTrips = [
  {
    id: 'trip-1',
    name: 'Southeast Asia Journey',
    borders: ['th-mal-bukit-kayu-hitam'],
    status: 'planned',
    startDate: '2023-12-01',
    endDate: '2023-12-15',
    notes: 'Motorcycle trip through Thailand and Malaysia',
  },
];

// This function creates a new trip
export const createTrip = async (tripData) => {
  // In a real app, this would save to a database
  const newTrip = {
    id: `trip-${Date.now()}`,
    ...tripData,
    status: 'planned',
    createdAt: new Date().toISOString(),
  };
  
  mockTrips.push(newTrip);
  return newTrip;
};

// This function gets all trips for the user
export const getUserTrips = async () => {
  // In a real app, this would fetch from a database
  return mockTrips;
};

// This function gets a specific trip by ID
export const getTripById = async (tripId) => {
  // In a real app, this would fetch from a database
  return mockTrips.find(trip => trip.id === tripId);
};

// This function updates a trip
export const updateTrip = async (tripId, updates) => {
  // In a real app, this would update in a database
  const tripIndex = mockTrips.findIndex(trip => trip.id === tripId);
  if (tripIndex !== -1) {
    mockTrips[tripIndex] = { ...mockTrips[tripIndex], ...updates };
    return mockTrips[tripIndex];
  }
  return null;
};

// This function deletes a trip
export const deleteTrip = async (tripId) => {
  // In a real app, this would delete from a database
  const tripIndex = mockTrips.findIndex(trip => trip.id === tripId);
  if (tripIndex !== -1) {
    mockTrips.splice(tripIndex, 1);
    return true;
  }
  return false;
};

// This function adds a border to a trip
export const addBorderToTrip = async (tripId, borderId) => {
  const trip = await getTripById(tripId);
  if (trip && !trip.borders.includes(borderId)) {
    trip.borders.push(borderId);
    return await updateTrip(tripId, { borders: trip.borders });
  }
  return null;
};

// This function removes a border from a trip
export const removeBorderFromTrip = async (tripId, borderId) => {
  const trip = await getTripById(tripId);
  if (trip) {
    const updatedBorders = trip.borders.filter(id => id !== borderId);
    return await updateTrip(tripId, { borders: updatedBorders });
  }
  return null;
};

// This function checks if the feature is enabled
export const isTripPlanningEnabled = () => {
  return FEATURE_FLAGS.TRIP_PLANNING;
};