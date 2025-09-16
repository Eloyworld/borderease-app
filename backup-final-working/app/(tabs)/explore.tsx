import { Text, View, Image, Linking, Platform, StyleSheet } from 'react-native';
import React from 'react';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <Text style={styles.text}>This app includes example code to help you get started.</Text>
      <Text style={styles.text}>
        This app has two screens: app/(tabs)/index.tsx and app/(tabs)/explore.tsx
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL('https://docs.expo.dev/router/introduction')}>
        Learn more about file-based routing
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
