import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="splash">
      {/* splash → first screen */}
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      
      {/* Onboarding flow */}
      <Stack.Screen name="language" options={{ headerShown: false }} />
      <Stack.Screen name="guide" options={{ headerShown: false }} />

      {/* Main app (tabs) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
