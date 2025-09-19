// components/borders/NeighborList.tsx
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { countries } from '../../data/countries';

interface NeighborListProps {
  neighbors: string[]; // Array of neighbor country IDs
  countryId: string; // current country
  onSelectNeighbor: (neighborId: string) => void;
}

export default function NeighborList({ neighbors, countryId, onSelectNeighbor }: NeighborListProps) {
  const neighborCountries = neighbors
    .map(id => countries.find(c => c.id === id))
    .filter(Boolean) as typeof countries;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Neighbor Countries</Text>
      <FlatList
        data={neighborCountries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.neighborButton}
            onPress={() => onSelectNeighbor(item.id)}
          >
            <Text style={styles.neighborText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, marginLeft: 16 },
  neighborButton: {
    backgroundColor: '#e3f2fd',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  neighborText: { fontSize: 14, fontWeight: 'bold', color: '#1976d2' },
});
