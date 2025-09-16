// components/ValidationTest.tsx
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { getCrossingsBetweenCountries, validateBorderCrossings } from '../utils/routeFinding';

export const ValidationTest: React.FC = () => {
  const [validationResults, setValidationResults] = useState<string[]>([]);
  const [crossingResults, setCrossingResults] = useState<string[]>([]);

  useEffect(() => {
    // Run validation
    const errors = validateBorderCrossings();
    setValidationResults(errors);

    // Test specific crossings
    const crossingTests: string[] = [];
    
    // Test China-India crossings
    const chinaIndiaCrossings = getCrossingsBetweenCountries('cn', 'in');
    crossingTests.push(`China ↔ India: ${chinaIndiaCrossings.length} crossings`);
    
    // Test India-Pakistan crossings
    const indiaPakistanCrossings = getCrossingsBetweenCountries('in', 'pk');
    crossingTests.push(`India ↔ Pakistan: ${indiaPakistanCrossings.length} crossings`);
    
    // Test non-neighboring countries
    const chinaGermanyCrossings = getCrossingsBetweenCountries('cn', 'de');
    crossingTests.push(`China ↔ Germany: ${chinaGermanyCrossings.length} crossings (should be 0)`);

    setCrossingResults(crossingTests);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Border Crossing Validation Test</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Validation Results:</Text>
        {validationResults.length === 0 ? (
          <Text style={styles.success}>✅ All validations passed!</Text>
        ) : (
          <View>
            <Text style={styles.error}>❌ Found {validationResults.length} errors:</Text>
            {validationResults.map((error, index) => (
              <Text key={index} style={styles.errorItem}>
                • {error}
              </Text>
            ))}
          </View>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Crossing Tests:</Text>
        {crossingResults.map((result, index) => (
          <Text key={index} style={styles.testItem}>
            • {result}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What to look for:</Text>
        <Text style={styles.info}>• China-India should show crossings (we added them)</Text>
        <Text style={styles.info}>• India-Pakistan may show errors (not added yet)</Text>
        <Text style={styles.info}>• China-Germany should show 0 crossings (no direct border)</Text>
        <Text style={styles.info}>• Validation errors indicate missing border data</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#444',
  },
  success: {
    color: 'green',
    fontSize: 16,
    fontWeight: '500',
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  errorItem: {
    color: 'red',
    fontSize: 14,
    marginBottom: 4,
    marginLeft: 8,
  },
  testItem: {
    fontSize: 14,
    marginBottom: 6,
    color: '#555',
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
    fontStyle: 'italic',
  },
});