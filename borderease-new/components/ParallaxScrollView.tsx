import React from 'react';
import { ScrollView, View } from 'react-native';

export default function ParallaxScrollView({ headerBackgroundColor, headerImage, children, style, ...props }) {
  return (
    <ScrollView style={style} {...props}>
      <View style={{ height: 250, backgroundColor: headerBackgroundColor?.light || '#D0D0D0' }}>
        {headerImage}
      </View>
      <View style={{ padding: 16 }}>
        {children}
      </View>
    </ScrollView>
  );
}
