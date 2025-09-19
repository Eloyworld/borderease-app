import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BorderCrossing {
  id: string;
  name: string;
  fromCountry: string;
  toCountry: string;
  requirements: {
    documents: string[];
    vehicleRequirements: string[];
    restrictions: string[];
  };
  status: string;
  waitTime: number;
  lastUpdated: Date;
}

interface CrossingCardProps {
  crossing: BorderCrossing;
  fromCountry: string;
  toCountry: string;
}

const CrossingCard: React.FC<CrossingCardProps> = ({ crossing, fromCountry, toCountry }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{crossing.name}</Text>
      <Text style={styles.status}>Status: {crossing.status}</Text>
      <Text style={styles.waitTime}>Wait Time: {crossing.waitTime} minutes</Text>
      
      <View style={styles.requirements}>
        <Text style={styles.sectionTitle}>Required Documents:</Text>
        {crossing.requirements.documents.map((doc, index) => (
          <Text key={index} style={styles.requirementItem}>• {doc}</Text>
        ))}
      </View>

      <View style={styles.requirements}>
        <Text style={styles.sectionTitle}>Vehicle Requirements:</Text>
        {crossing.requirements.vehicleRequirements.map((req, index) => (
          <Text key={index} style={styles.requirementItem}>• {req}</Text>
        ))}
      </View>

      <View style={styles.requirements}>
        <Text style={styles.sectionTitle}>Restrictions:</Text>
        {crossing.requirements.restrictions.map((restriction, index) => (
          <Text key={index} style={styles.requirementItem}>• {restriction}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 4,
  },
  waitTime: {
    fontSize: 16,
    color: '#495057',
    marginBottom: 12,
  },
  requirements: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  requirementItem: {
    fontSize: 14,
    color: '#495057',
    marginLeft: 8,
  },
});

export default CrossingCard;