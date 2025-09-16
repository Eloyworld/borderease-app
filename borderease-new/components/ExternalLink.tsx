import React from 'react';
import { TouchableOpacity, Linking } from 'react-native';

export default function ExternalLink({ href, children, style, ...props }) {
  const handlePress = () => {
    Linking.openURL(href).catch(err => console.error('Failed to open URL:', err));
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style} {...props}>
      {children}
    </TouchableOpacity>
  );
}
