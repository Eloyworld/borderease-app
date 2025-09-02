import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ThemedText({ type = 'default', style, ...props }) {
  const textStyle = [
    styles.default,
    type === 'title' && styles.title,
    type === 'defaultSemiBold' && styles.defaultSemiBold,
    type === 'link' && styles.link,
    style
  ];

  return <Text style={textStyle} {...props} />;
}

const styles = StyleSheet.create({
  default: { fontSize: 16, lineHeight: 24 },
  title: { fontSize: 24, fontWeight: 'bold', lineHeight: 32 },
  defaultSemiBold: { fontSize: 16, lineHeight: 24, fontWeight: '600' },
  link: { lineHeight: 30, fontSize: 16, color: '#0a7ea4' }
});
