import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const SettingsScreen = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [premiumStatus, setPremiumStatus] = useState(false);

  useEffect(() => {
    // Load current settings
    const loadSettings = async () => {
      try {
        const guideCompleted = await AsyncStorage.getItem('guideCompleted');
        setShowGuide(guideCompleted !== 'true');
        
        // Check if user has premium (in a real app, this would check with a server)
        const isPremium = await AsyncStorage.getItem('isPremium');
        setPremiumStatus(isPremium === 'true');
      } catch (e) {
        console.error('Error loading settings:', e);
      }
    };

    loadSettings();
  }, []);

  const toggleShowGuide = async () => {
    const newValue = !showGuide;
    setShowGuide(newValue);
    
    if (newValue) {
      // Reset guide to show again
      await AsyncStorage.removeItem('guideCompleted');
      await AsyncStorage.removeItem('guideViewCount');
      Alert.alert(
        'Guide Enabled',
        'The app guide will be shown on next restart.',
        [{ text: 'OK' }]
      );
    } else {
      // Mark guide as completed
      await AsyncStorage.setItem('guideCompleted', 'true');
      Alert.alert(
        'Guide Disabled',
        'The app guide will not be shown again.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleResetGuide = () => {
    Alert.alert(
      'Reset Guide',
      'This will reset the guide to show 3 more times. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset', 
          onPress: async () => {
            await AsyncStorage.removeItem('guideCompleted');
            await AsyncStorage.removeItem('guideViewCount');
            setShowGuide(true);
            Alert.alert('Success', 'Guide has been reset. It will show on next restart.');
          }
        }
      ]
    );
  };

  const handleSubscription = () => {
    if (premiumStatus) {
      Alert.alert('Premium Active', 'You already have an active premium subscription.');
    } else {
      Alert.alert(
        'Go Premium',
        'Unlock all features with a premium subscription:\n\n• Multi-border trip planning\n• Real-time border alerts\n• Priority support\n• Early access to new features',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: '$5/month', 
            onPress: () => {
              // In a real app, this would process payment
              setPremiumStatus(true);
              AsyncStorage.setItem('isPremium', 'true');
              Alert.alert('Success', 'Premium subscription activated!');
            }
          },
          { 
            text: '$50/year', 
            onPress: () => {
              // In a real app, this would process payment
              setPremiumStatus(true);
              AsyncStorage.setItem('isPremium', 'true');
              Alert.alert('Success', 'Premium subscription activated!');
            }
          }
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Preferences</Text>
        
        <View style={styles.settingRow}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingLabel}>Show App Guide</Text>
            <Text style={styles.settingDescription}>
              {showGuide ? 'Guide will be shown on next restart' : 'Guide is currently disabled'}
            </Text>
          </View>
          <Switch
            value={showGuide}
            onValueChange={toggleShowGuide}
            trackColor={{ false: '#767577', true: '#3498db' }}
          />
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleResetGuide}>
          <Text style={styles.buttonText}>Reset Guide Counter</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Subscription</Text>
        
        <View style={styles.subscriptionCard}>
          <Text style={styles.subscriptionTitle}>
            {premiumStatus ? 'Premium Active' : 'Free Version'}
          </Text>
          <Text style={styles.subscriptionDescription}>
            {premiumStatus 
              ? 'You have access to all premium features' 
              : 'Upgrade to premium to unlock all features'
            }
          </Text>
          <TouchableOpacity 
            style={[
              styles.subscriptionButton,
              premiumStatus && styles.subscriptionButtonActive
            ]} 
            onPress={handleSubscription}
          >
            <Text style={styles.subscriptionButtonText}>
              {premiumStatus ? 'Manage Subscription' : 'Go Premium'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          Beyond Borders v1.0.0
        </Text>
        <Text style={styles.aboutText}>
          Your travel companion for border crossings
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#2c3e50',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2c3e50',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  settingInfo: {
    flex: 1,
    marginRight: 10,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
  },
  settingDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  button: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#ecf0f1',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#2c3e50',
    textAlign: 'center',
  },
  subscriptionCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2c3e50',
  },
  subscriptionDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 16,
  },
  subscriptionButton: {
    backgroundColor: '#ecf0f1',
    paddingVertical: 12,
    borderRadius: 8,
  },
  subscriptionButtonActive: {
    backgroundColor: '#2ecc71',
  },
  subscriptionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 4,
  },
});

export default SettingsScreen;