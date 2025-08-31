import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SplashScreen() {
  const router = useRouter();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/language');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Beyond Borders</Text>
      <Text style={styles.taglineText}>Your travel companion for crossing borders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50', // Dark blue background
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  taglineText: {
    fontSize: 20,
    color: '#ecf0f1',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
