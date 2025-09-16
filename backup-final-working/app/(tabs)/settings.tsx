import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Settings</ThemedText>
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
  },
});
