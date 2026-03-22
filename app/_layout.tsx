import '../global.css';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function Layout() {
  const [fontsLoaded] = useFonts({
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

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack />
    </SafeAreaProvider>
  );
}
