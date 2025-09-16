import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we initialize the app
SplashScreen.preventAutoHideAsync();

const { width, height } = Dimensions.get('window');

export default function AppSplash({ onFinish }) {
  useEffect(() => {
    async function prepare() {
      try {
        // Show splash screen for 5 seconds
        await new Promise(resolve => setTimeout(resolve, 5000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
        // Notify parent component that splash is done
        if (onFinish) onFinish();
      }
    }

    prepare();
  }, [onFinish]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/splash.png')} 
        style={styles.image} 
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
