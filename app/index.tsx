import { Stack } from 'expo-router';

import { View } from 'react-native';



import { TextComponent } from '@/design-system';

export default function Home() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Home' }} />
      <View className='mt-24'>
        <TextComponent
          variant="display"
          scale="display1"
          className="text-primary-600"
          fontWeight={500}
          textAlign="center"
          color="primary-800"
          letterSpacing={0.1}
        >
          Custom styled text with medium weight, relaxed line height, wide letter spacing, center alignment, italic, and underline
        </TextComponent>
      </View>
    </View>
  );
}

const styles = {
  container: 'flex-1 bg-white',
};
