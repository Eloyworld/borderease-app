import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ThemedView({ style, ...props }) {
  const viewStyle = [styles.container, style];
  return <View style={viewStyle} {...props} />;
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
