import React from 'react';
import { Text } from 'react-native';

export default function IconSymbol({ name, size, color, style }) {
  return (
    <Text style={[{ fontSize: size, color }, style]}>
      {name === 'chevron.left.forwardslash.chevron.right' ? '</>' : '?'}
    </Text>
  );
}
