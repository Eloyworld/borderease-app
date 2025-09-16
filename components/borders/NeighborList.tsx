// components/borders/NeighborList.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { countries } from '../../data/countries';

interface NeighborListProps {
  currentCountry: string;
  onSelectNeighbor: (countryId: string) => void;
}

export default function NeighborList({ currentCountry, onSelectNeighbor }: NeighborListProps) {
  const current = countries.find(c => c.id === currentCountry);
  if (!current) return null;

  const neighbors = countries.filter(c => current.neighbors.includes(c.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Neighboring Countries</Text>
      <View style={styles.neighborList}>
        {neighbors.map(country => (
          <TouchableOpacity
            key={country.id}
            style={styles.neighborButton}
            onPress={() => onSelectNeighbor(country.id)}
          >
            <Text style={styles.neighborText}>{country.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  neighborList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  neighborButton: {
    padding: 12,
    backgroundColor: '#e8f4f8',
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  neighborText: {
    fontSize: 14,
  },
});
