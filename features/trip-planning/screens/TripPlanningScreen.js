import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TripCard from '../components/TripCard';
import { getUserTrips, isTripPlanningEnabled } from '../services/tripService';

const TripPlanningScreen = ({ navigation }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if feature is enabled
    if (!isTripPlanningEnabled()) {
      setError('Trip planning feature is not available');
      setLoading(false);
      return;
    }

    // Load trip data
    const loadTrips = async () => {
      try {
        const tripsData = await getUserTrips();
        setTrips(tripsData);
      } catch (err) {
        setError('Failed to load your trips');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTrips();
  }, []);

  // Handle when a user taps on a trip card
  const handleTripPress = (trip) => {
    // In a real app, this would navigate to a trip detail screen
    alert(`Trip: ${trip.name}\nStatus: ${trip.status}\nBorders: ${trip.borders.length}\nDates: ${trip.startDate} to ${trip.endDate}`);
  };

  // Handle creating a new trip
  const handleCreateTrip = () => {
    // In a real app, this would navigate to a trip creation screen
    alert('Create new trip feature coming soon!');
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Trips</Text>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateTrip}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TripCard 
            trip={item} 
            onPress={() => handleTripPress(item)} 
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No trips yet</Text>
            <Text style={styles.emptyText}>Create your first trip to get started</Text>
            <TouchableOpacity style={styles.emptyButton} onPress={handleCreateTrip}>
              <Text style={styles.emptyButtonText}>Create Trip</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  createButton: {
    backgroundColor: '#3498db',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 16,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  emptyButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  emptyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TripPlanningScreen;