// app/language.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
];

export default function LanguageScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const router = useRouter();

  const handleContinue = async () => {
    await AsyncStorage.setItem('appLanguage', selectedLanguage);
    await AsyncStorage.setItem('firstLaunch', 'true');
    router.replace('/guide');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Language</Text>
      
      {languages.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={[
            styles.languageButton,
            selectedLanguage === lang.code && styles.selectedButton,
          ]}
          onPress={() => setSelectedLanguage(lang.code)}
        >
          <Text style={[
            styles.languageText,
            selectedLanguage === lang.code && styles.selectedText,
          ]}>
            {lang.name}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#2c3e50',
  },
  languageButton: {
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedButton: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  languageText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#2c3e50',
  },
  selectedText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  continueButton: {
    marginTop: 20,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#2ecc71',
  },
  continueText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
});