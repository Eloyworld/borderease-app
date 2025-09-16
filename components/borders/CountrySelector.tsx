// components/borders/CountrySelector.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, FlatList } from 'react-native';
import { countries } from '../../data/countries';

interface CountrySelectorProps {
  selectedCountry: string | null;
  onSelectCountry: (countryId: string) => void;
  title?: string;
  showAllCountries?: boolean;
  availableCountries?: string[]; // Array of country IDs that are available for selection
}

export default function CountrySelector({ 
  selectedCountry, 
  onSelectCountry, 
  title = "Select Country",
  showAllCountries = false,
  availableCountries = [] // Default to empty array
}: CountrySelectorProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sort countries alphabetically
  const sortedCountries = [...countries].sort((a, b) => a.name.localeCompare(b.name));
  
  // Filter countries based on availability and search query
  const filteredCountries = sortedCountries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const isAvailable = availableCountries.length === 0 || availableCountries.includes(country.id);
    return matchesSearch && isAvailable;
  });

  const displayedCountries = showAllCountries ? filteredCountries : 
    filteredCountries.filter(country => country.continent === 'asia' || country.continent === 'europe');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      
      <TouchableOpacity
        style={styles.selectorButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectorButtonText}>
          {selectedCountry 
            ? countries.find(c => c.id === selectedCountry)?.name 
            : 'Tap to select a country'}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Country</Text>
            
            <TextInput
              style={styles.searchInput}
              placeholder="Search countries..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            
            {displayedCountries.length > 0 ? (
              <FlatList
                data={displayedCountries}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.countryItem,
                      selectedCountry === item.id && styles.selectedCountryItem
                    ]}
                    onPress={() => {
                      onSelectCountry(item.id);
                      setModalVisible(false);
                      setSearchQuery('');
                    }}
                  >
                    <Text style={[
                      styles.countryItemText,
                      selectedCountry === item.id && styles.selectedCountryItemText
                    ]}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                style={styles.countryList}
              />
            ) : (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>
                  No countries available for selection
                </Text>
              </View>
            )}
            
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 12,
  },
  selectorButton: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectorButtonText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  searchInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  countryList: {
    maxHeight: 300,
    marginBottom: 16,
  },
  noResults: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  countryItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedCountryItem: {
    backgroundColor: '#e3f2fd',
  },
  countryItemText: {
    fontSize: 16,
  },
  selectedCountryItemText: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 12,
    backgroundColor: '#1976d2',
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
