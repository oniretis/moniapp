import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { View, Text, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function LoadingIndicator() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <ActivityIndicator size="large" color="#000" />
      <Text className="mt-4 text-gray-600">Loading...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function Layout() {
  const [fontsLoaded, fontsError] = useFonts({
    'Satoshi-Regular': require('../assets/fonts/Satoshi-Regular.ttf'),
    'Satoshi-RegularItalic': require('../assets/fonts/Satoshi-RegularItalic.ttf'),
    'Satoshi-Light': require('../assets/fonts/Satoshi-Light.ttf'),
    'Satoshi-LightItalic': require('../assets/fonts/Satoshi-LightItalic.ttf'),
    'Satoshi-Medium': require('../assets/fonts/Satoshi-Medium.ttf'),
    'Satoshi-MediumItalic': require('../assets/fonts/Satoshi-MediumItalic.ttf'),
    'Satoshi-Bold': require('../assets/fonts/Satoshi-Bold.ttf'),
    'Satoshi-BoldItalic': require('../assets/fonts/Satoshi-BoldItalic.ttf'),
    'Satoshi-Black': require('../assets/fonts/Satoshi-Black.ttf'),
    'Satoshi-BlackItalic': require('../assets/fonts/Satoshi-BlackItalic.ttf'),
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded && !fontsError) {
    return <LoadingIndicator />;
  }

  // Show app with fallback navigation if fonts fail to load
  if (fontsError) {
    console.warn('Font loading error:', fontsError);
  }

  return (
    <SafeAreaProvider>
      <Stack />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
