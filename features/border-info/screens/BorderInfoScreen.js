import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import BorderCard from '../components/BorderCard';
import { getNearestBorders, isBorderInfoEnabled } from '../services/borderService';

const BorderInfoScreen = () => {
  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if feature is enabled
    if (!isBorderInfoEnabled()) {
      setError('Border information feature is not available');
      setLoading(false);
      return;
    }

    // Load border data
    const loadBorders = async () => {
      try {
        // In a real app, you would get the user's current location
        // For now, we'll use dummy coordinates (Seattle, WA)
        const bordersData = await getNearestBorders(47.6062, -122.3321);
        setBorders(bordersData);
      } catch (err) {
        setError('Failed to load border information');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadBorders();
  }, []);

  // Handle when a user taps on a border card
  const handleBorderPress = (border) => {
    // In a real app, this would navigate to a detail screen
    alert(`Selected: ${border.name}\nStatus: ${border.status}\nDocuments: ${border.documents.join(', ')}`);
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
      <Text style={styles.title}>Nearby Border Crossings</Text>
      
      <FlatList
        data={borders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BorderCard 
            border={item} 
            onPress={() => handleBorderPress(item)} 
          />
        )}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No border crossings found</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
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
  emptyText: {
    textAlign: 'center',
    color: '#7f8c8d',
    fontSize: 16,
    marginTop: 20,
  },
});

export default BorderInfoScreen;