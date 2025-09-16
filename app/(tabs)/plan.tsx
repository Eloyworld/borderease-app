// app/(tabs)/plan.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CountrySelector from '../../components/borders/CountrySelector';
import { countries } from '../../data/countries';

export default function PlanScreen() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  // Get the last selected country to determine which neighbors to show
  const lastSelectedCountry = selectedCountries.length > 0 
    ? selectedCountries[selectedCountries.length - 1] 
    : null;

  // Get available next countries (neighbors of the last selected country)
  const getAvailableNextCountries = () => {
    if (!lastSelectedCountry) {
      // If no country selected yet, show all countries
      return countries.filter(country => country.continent === 'asia' || country.continent === 'europe');
    }
    
    // Get neighbors of the last selected country (don't filter out already selected ones)
    const currentCountry = countries.find(c => c.id === lastSelectedCountry);
    if (!currentCountry) return [];
    
    return countries.filter(country => 
      currentCountry.neighbors.includes(country.id)
    );
  };

  const availableCountries = getAvailableNextCountries();

  const handleSelectCountry = (countryId: string) => {
    setSelectedCountries([...selectedCountries, countryId]);
  };

  const removeCountry = (index: number) => {
    // Remove the country and all subsequent countries
    setSelectedCountries(selectedCountries.slice(0, index));
  };

  const clearAllCountries = () => {
    setSelectedCountries([]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Plan Your Route</Text>
      
      <Text style={styles.instructions}>
        {selectedCountries.length === 0 
          ? "Select your starting country:" 
          : "Select your next destination:"}
      </Text>
      
      {availableCountries.length > 0 ? (
        <CountrySelector 
          selectedCountry={null}
          onSelectCountry={handleSelectCountry}
          title={selectedCountries.length === 0 ? "Select Starting Country" : "Select Next Country"}
          showAllCountries={false}
          availableCountries={availableCountries.map(c => c.id)}
        />
      ) : selectedCountries.length > 0 ? (
        <View style={styles.noOptionsContainer}>
          <Text style={styles.noOptionsText}>
            No more neighboring countries available to add to your route.
          </Text>
        </View>
      ) : null}
      
      {selectedCountries.length > 0 && (
        <View style={styles.selectedContainer}>
          <View style={styles.selectedHeader}>
            <Text style={styles.selectedTitle}>Your Route:</Text>
            <TouchableOpacity onPress={clearAllCountries}>
              <Text style={styles.clearButton}>Clear All</Text>
            </TouchableOpacity>
          </View>
          
          {selectedCountries.map((countryId, index) => {
            const country = countries.find(c => c.id === countryId);
            const isLast = index === selectedCountries.length - 1;
            
            return (
              <View key={`${countryId}-${index}`} style={[
                styles.selectedCountry,
                isLast && styles.lastSelectedCountry
              ]}>
                <Text style={styles.countryNumber}>{index + 1}.</Text>
                <Text style={styles.countryName}>{country?.name}</Text>
                <TouchableOpacity 
                  style={styles.removeButton}
                  onPress={() => removeCountry(index)}
                >
                  <Text style={styles.removeButtonText}>×</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          
          <View style={styles.routeInfo}>
            <Text style={styles.infoText}>
              Route planning functionality will be implemented here.
            </Text>
            <Text style={styles.infoText}>
              This will include border crossing requirements for each transition,
              estimated travel times, and document requirements.
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  noOptionsContainer: {
    padding: 16,
    backgroundColor: '#fff3cd',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ffeaa7',
  },
  noOptionsText: {
    textAlign: 'center',
    color: '#856404',
  },
  selectedContainer: {
    marginTop: 24,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  selectedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
  selectedCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  lastSelectedCountry: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#bbdefb',
  },
  countryNumber: {
    fontWeight: 'bold',
    marginRight: 8,
    width: 24,
  },
  countryName: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    padding: 4,
    backgroundColor: '#ff4444',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  routeInfo: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
  },
});
