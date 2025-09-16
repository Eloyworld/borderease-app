import { countries } from '@/data/countries';
import { Ionicons } from '@expo/vector-icons';
import BorderEase from 'C:\Projects\borderease-app\data\countries.ts';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { checkPremiumStatus } from './services/premiumService';
console.log('Countries data loaded:', countries);
console.log('Number of countries:', countries.length);
if (countries.length > 0) {
  console.log('First country:', countries[0]);
}
function TestComponent() {
  const YourComponentName = () => {
  console.log('Borders component rendered');
  return <Text>Test Component</Text>;
}
const countryData = {};
countries.forEach(country => {
  countryData[country.id] = {
    ...country,
    flag: country.flag || '🏳️', // Add default flag if missing
  };
});

// Helper function to get country by name
const getCountryByName = (name) => {
  return Object.values(countryData).find(country => 
    country.name.toLowerCase() === name.toLowerCase()
  );
};

const BorderEase = () => {  
  console.log('BorderEase component rendered');
  const [currentScreen, setCurrentScreen] = useState('borders');
  const [currentCountry, setCurrentCountry] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [planRoute, setPlanRoute] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [locationError, setLocationError] = useState(null);
  const [isPremium, setIsPremium] = useState(false); // Premium state
 
  console.log('COUNTRIES DATA:', {
    total: Object.keys(countryData).length,
    countries: Object.keys(countryData),
    hasKazakhstan: 'kz' in countryData
  });
  // Check premium status on app start
  useEffect(() => {
    const checkPremium = async () => {
      const premium = await checkPremiumStatus();
      setIsPremium(premium);
    };
    checkPremium();
  }, []);

  // Get user's location and set current country
  useEffect(() => {
    const getLocation = async () => {
      try {
        setLoading(true);
        let { status } = await Location.requestForegroundPermissionsAsync();
        
        if (status !== 'granted') {
          setLocationError('Permission to access location was denied');
          // Default to Thailand for demo purposes
          setCurrentCountry(getCountry('TH'));
          setLoading(false);
          return;
        }

        // For demo purposes, we'll set Thailand as the location
        // In a real app, you would use:
        // let location = await Location.getCurrentPositionAsync({});
        // Then reverse geocode to get country name
        
        // Simulate API call delay
        setTimeout(() => {
          setCurrentCountry(getCountry('TH'));
          setLoading(false);
        }, 1500);
        
      } catch (error) {
        setLocationError('Error getting location');
        setCurrentCountry(getCountry('TH')); // Fallback to Thailand
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setModalVisible(true);
  };

  const addToRoute = (country) => {
    if (!planRoute.some(c => c.id === country.id)) {
      setPlanRoute([...planRoute, country]);
    }
    setModalVisible(false);
  };

  const removeFromRoute = (index) => {
    const newRoute = [...planRoute];
    newRoute.splice(index, 1);
    setPlanRoute(newRoute);
  };

  const clearRoute = () => {
    setPlanRoute([]);
  };

  const getNextPossibleCountries = () => {
    if (planRoute.length === 0) {
      return Object.values(countryData);
    }
    
    const lastCountry = planRoute[planRoute.length - 1];
    return lastCountry.neighbors.map(neighborId => getCountry(neighborId));
  };

  const filteredCountries = Object.values(countryData).filter(country => 
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCrossingStatus = (status) => {
    const statusConfig = {
      open: { color: '#4CAF50', text: 'Open' },
      closed: { color: '#F44336', text: 'Closed' },
      restricted: { color: '#FF9800', text: 'Restricted' }
    };
    
    const config = statusConfig[status] || statusConfig.open;
    
    return (
      <View style={[styles.statusBadge, { backgroundColor: `${config.color}15` }]}>
        <View style={[styles.statusDot, { backgroundColor: config.color }]} />
        <Text style={[styles.statusText, { color: config.color }]}>
          {config.text}
        </Text>
      </View>
    );
  };

  const renderBordersScreen = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.loadingText}>Detecting your location...</Text>
        </View>
      );
    }

    if (!currentCountry) {
      return (
        <View style={styles.centerContainer}>
          <Ionicons name="location-off" size={50} color="#ccc" />
          <Text style={styles.errorText}>Unable to detect your location</Text>
          <Text style={styles.errorSubtext}>Please check your location settings</Text>
        </View>
      );
    }

    return (
      <View style={styles.screen}>
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Ionicons name="location" size={20} color="#4A90E2" />
            <Text style={styles.locationTitle}>Your Current Location</Text>
          </View>
          <View style={styles.currentCountry}>
            <Text style={styles.flag}>{currentCountry.flag}</Text>
            <View>
              <Text style={styles.countryName}>{currentCountry.name}</Text>
              <Text style={styles.locationSubtext}>Detected via GPS</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Neighboring Countries</Text>
        
        <ScrollView style={styles.neighborsList}>
          {currentCountry.neighbors.map(neighborId => {
            const neighbor = getCountry(neighborId);
            return (
              <TouchableOpacity 
                key={neighborId} 
                style={styles.neighborItem}
                onPress={() => handleCountrySelect(neighbor)}
              >
                <Text style={styles.flag}>{neighbor.flag}</Text>
                <View style={styles.neighborInfo}>
                  <Text style={styles.countryName}>{neighbor.name}</Text>
                  <Text style={styles.neighborSubtext}>
                    {neighbor.borderCrossings.length} border crossings
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#ccc" />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  const renderPlanScreen = () => (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Plan Your Multi-Country Route</Text>
      
      <View style={[styles.searchBox, isSearchFocused && styles.searchBoxFocused]}>
        <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search countries..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </View>

      {planRoute.length > 0 ? (
        <View style={styles.routeContainer}>
          <View style={styles.routeHeader}>
            <Text style={styles.routeTitle}>Your Travel Route</Text>
            <TouchableOpacity onPress={clearRoute} style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal style={styles.routePath} showsHorizontalScrollIndicator={false}>
            {planRoute.map((country, index) => (
              <View key={index} style={styles.routeItem}>
                <View style={styles.routeCountry}>
                  <Text style={styles.routeFlag}>{country.flag}</Text>
                  <Text style={styles.routeName}>{country.name}</Text>
                </View>
                {index < planRoute.length - 1 && (
                  <View style={styles.arrowContainer}>
                    <Ionicons name="arrow-forward" size={20} color="#4A90E2" />
                  </View>
                )}
                <TouchableOpacity 
                  style={styles.removeButton}
                  onPress={() => removeFromRoute(index)}
                >
                  <Ionicons name="close-circle" size={20} color="#ff6b6b" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
          
          <View style={styles.routeStats}>
            <Text style={styles.routeStatsText}>
              {planRoute.length} {planRoute.length === 1 ? 'country' : 'countries'} • {planRoute.length - 1} border crossings
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Ionicons name="map-outline" size={50} color="#ccc" />
          <Text style={styles.emptyStateText}>Your route is empty</Text>
          <Text style={styles.emptyStateSubtext}>Add countries to start planning your journey</Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>
        {planRoute.length > 0 ? 'Next Possible Destinations' : 'Available Countries'}
      </Text>
      
      <ScrollView style={styles.countriesList}>
        {filteredCountries
          .filter(country => planRoute.length === 0 || getNextPossibleCountries().some(c => c.id === country.id))
          .map(country => (
            <TouchableOpacity 
              key={country.id} 
              style={styles.countryItem}
              onPress={() => addToRoute(country)}
            >
              <Text style={styles.flag}>{country.flag}</Text>
              <View style={styles.countryInfo}>
                <Text style={styles.countryName}>{country.name}</Text>
                <Text style={styles.countrySubtext}>
                  {country.neighbors.length} neighboring countries
                </Text>
              </View>
              <Ionicons name="add-circle" size={24} color="#4A90E2" />
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
// TEMPORARY TEST - REMOVE AFTER USE
useEffect(() => {
  console.log('Testing new countries...');
  const testCountries = ['vn', 'id', 'sg', 'ph', 'bn', 'tl'];
  testCountries.forEach(countryId => {
    const country = countries.find(c => c.id === countryId);
    console.log(`${countryId}:`, country ? '✓ Found' : '✗ Missing');
  });
}, []);
// END TEMPORARY TEST
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>BorderEase</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="person-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Premium Status Banner */}
      <View style={[styles.premiumBanner, { backgroundColor: isPremium ? '#4CAF50' : '#FF9800' }]}>
        <Text style={styles.premiumText}>
          {isPremium ? 'PREMIUM ACTIVE' : 'FREE TRIAL (7 days)'}
        </Text>
      </View>
      
      {/* Navigation Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, currentScreen === 'borders' && styles.activeTab]}
          onPress={() => setCurrentScreen('borders')}
        >
          <Ionicons 
            name="navigate" 
            size={20} 
            color={currentScreen === 'borders' ? '#4A90E2' : '#666'} 
          />
          <Text style={[styles.tabText, currentScreen === 'borders' && styles.activeTabText]}>
            Borders
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, currentScreen === 'plan' && styles.activeTab]}
          onPress={() => setCurrentScreen('plan')}
        >
          <Ionicons 
            name="map" 
            size={20} 
            color={currentScreen === 'plan' ? '#4A90E2' : '#666'} 
          />
          <Text style={[styles.tabText, currentScreen === 'plan' && styles.activeTabText]}>
            Plan Route
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Main Content */}
      {currentScreen === 'borders' ? renderBordersScreen() : renderPlanScreen()}
      
      {/* Country Detail Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedCountry?.name} {selectedCountry?.flag}
              </Text>
              <TouchableOpacity 
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Ionicons name="close" size={24} color="#000" />
              </TouchableOpacity>
            </View>
            
            {selectedCountry && currentCountry && (
              <>
                <Text style={styles.modalSectionTitle}>
                  Border Crossings from {currentCountry.name}
                </Text>
                
                {selectedCountry.borderCrossings.filter(crossing => 
                  crossing.name.includes(currentCountry.name) || crossing.name.includes(selectedCountry.name)
                ).length > 0 ? (
                  selectedCountry.borderCrossings
                    .filter(crossing => 
                      crossing.name.includes(currentCountry.name) || crossing.name.includes(selectedCountry.name)
                    )
                    .map((crossing, index) => (
                    <View key={index} style={styles.crossingItem}>
                      <View style={styles.crossingHeader}>
                        <Ionicons name="location" size={16} color="#4A90E2" />
                        <Text style={styles.crossingName}>{crossing.name}</Text>
                        {renderCrossingStatus(crossing.status)}
                      </View>
                      
                      <View style={styles.crossingDetails}>
                        <View style={styles.detailRow}>
                          <Text style={styles.detailLabel}>Wait Time:</Text>
                          <Text style={styles.detailValue}>{crossing.waitTime}</Text>
                        </View>
                        
                        <View style={styles.detailRow}>
                          <Text style={styles.detailLabel}>Operating Hours:</Text>
                          <Text style={styles.detailValue}>{crossing.hours}</Text>
                        </View>
                        
                        <View style={styles.detailRow}>
                          <Text style={styles.detailLabel}>Requirements:</Text>
                          <View style={styles.requirements}>
                            {crossing.requirements.map((req, i) => (
                              <View key={i} style={styles.requirementBadge}>
                                <Text style={styles.requirementText}>{req}</Text>
                              </View>
                            ))}
                          </View>
                        </View>
                        
                        {crossing.restrictions.length > 0 && (
                          <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Restrictions:</Text>
                            <View style={styles.restrictions}>
                              {crossing.restrictions.map((restriction, i) => (
                                <View key={i} style={styles.restrictionItem}>
                                  <Ionicons name="warning-outline" size={14} color="#FF9800" />
                                  <Text style={styles.restrictionText}>{restriction}</Text>
                                </View>
                              ))}
                            </View>
                          </View>
                        )}
                      </View>
                    </View>
                  ))
                ) : (
                  <Text style={styles.noCrossings}>No border crossings data available</Text>
                )}
                
                <TouchableOpacity 
                  style={styles.addToRouteButton}
                  onPress={() => addToRoute(selectedCountry)}
                >
                  <Ionicons name="add" size={20} color="#fff" />
                  <Text style={styles.addToRouteText}>Add to Route</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
  // Premium Banner Styles
  premiumBanner: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  premiumText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    marginLeft: 8,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4A90E2',
  },
  screen: {
    flex: 1,
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    marginTop: 16,
    fontSize: 18,
    color: '#2c3e50',
    fontWeight: '500',
  },
  errorSubtext: {
    marginTop: 8,
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  locationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationTitle: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '600',
    marginLeft: 8,
  },
  currentCountry: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 32,
    marginRight: 16,
  },
  countryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  locationSubtext: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  neighborsList: {
    flex: 1,
  },
  neighborItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  neighborInfo: {
    flex: 1,
    marginLeft: 12,
  },
  neighborSubtext: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginBottom: 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  searchBoxFocused: {
    borderColor: '#4A90E2',
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  routeContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  routeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    color: '#e74c3c',
    fontWeight: '500',
  },
  routePath: {
    flexGrow: 0,
    marginBottom: 12,
  },
  routeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  routeCountry: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f7ff',
    padding: 10,
    borderRadius: 10,
  },
  routeFlag: {
    fontSize: 24,
    marginRight: 8,
  },
  routeName: {
    fontWeight: '500',
    color: '#2c3e50',
  },
  arrowContainer: {
    marginHorizontal: 8,
  },
  removeButton: {
    marginLeft: 8,
  },
  routeStats: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  routeStatsText: {
    color: '#7f8c8d',
    fontSize: 12,
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 40,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 12,
    marginBottom: 4,
    color: '#2c3e50',
  },
  emptyStateSubtext: {
    color: '#7f8c8d',
    textAlign: 'center',
  },
  countriesList: {
    flex: 1,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  countryInfo: {
    flex: 1,
    marginLeft: 12,
  },
  countrySubtext: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  closeButton: {
    padding: 4,
  },
  modalSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#2c3e50',
  },
  crossingItem: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  crossingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  crossingName: {
    flex: 1,
    marginLeft: 8,
    fontWeight: '500',
    color: '#2c3e50',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  crossingDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  detailLabel: {
    width: 100,
    fontSize: 12,
    color: '#7f8c8d',
  },
  detailValue: {
    flex: 1,
    fontSize: 12,
    color: '#2c3e50',
    fontWeight: '500',
  },
  requirements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  requirementBadge: {
    backgroundColor: '#e8f4ff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 4,
  },
  requirementText: {
    fontSize: 10,
    color: '#4A90E2',
    fontWeight: '500',
  },
  restrictions: {
    flex: 1,
  },
  restrictionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  restrictionText: {
    fontSize: 12,
    color: '#2c3e50',
    marginLeft: 4,
  },
  noCrossings: {
    fontStyle: 'italic',
    color: '#7f8c8d',
    textAlign: 'center',
    marginVertical: 20,
  },
  addToRouteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  addToRouteText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default BorderEase;