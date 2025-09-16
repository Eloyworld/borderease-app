import AsyncStorage from '@react-native-async-storage/async-storage';

const PREMIUM_KEY = 'user_premium_status';
const TRIAL_START_KEY = 'trial_start_date';

export const checkPremiumStatus = async () => {
  try {
    // Check if user has permanent premium
    const permanentPremium = await AsyncStorage.getItem(PREMIUM_KEY);
    if (permanentPremium === 'true') return true;
    
    // Check trial period
    const trialStart = await AsyncStorage.getItem(TRIAL_START_KEY);
    if (!trialStart) {
      // First time user - start trial
      const startDate = new Date().toISOString();
      await AsyncStorage.setItem(TRIAL_START_KEY, startDate);
      return true;
    }
    
    // Check if trial has expired (7 days)
    const startDate = new Date(trialStart);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays <= 7; // 7-day trial
  } catch (error) {
    return false;
  }
};

export const activatePremium = async () => {
  try {
    await AsyncStorage.setItem(PREMIUM_KEY, 'true');
    return true;
  } catch (error) {
    return false;
  }
};