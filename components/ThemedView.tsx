import { View, type ViewProps } from 'react-native';
export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};
export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  // Use a simple color approach instead of the useThemeColor hook
  const backgroundColor = lightColor || darkColor || '#FFFFFF';
  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
