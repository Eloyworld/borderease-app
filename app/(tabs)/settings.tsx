import React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

export default function SettingsScreen() {
  const handleFeedback = () => {
    Linking.openURL('mailto:eliyrecalde@mail.com?subject=BorderEase App Feedback');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Settings</ThemedText>
      
      <TouchableOpacity style={styles.button} onPress={handleFeedback}>
        <ThemedText style={styles.buttonText}>Send Feedback</ThemedText>
      </TouchableOpacity>

      <ThemedText style={styles.subtitle}>
        Settings functionality will be restored here
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});