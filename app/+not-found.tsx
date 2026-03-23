import { TextComponent } from '@/design-system';
import { Stack, router } from 'expo-router';
import React from 'react';

import { TouchableOpacity, View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <TextComponent className={styles.title}>{"This screen doesn't exist."}</TextComponent>

      <TouchableOpacity
        className={styles.goHomeButton}
        onPress={() => router.push('/')}
        accessibilityLabel="Go to home screen"
        accessibilityRole="button"
      >
        <TextComponent className={styles.goHomeButtonText}>Go Home</TextComponent>
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  container: `flex flex-1 bg-white items-center justify-center`,
  title: `text-xl font-bold text-center mb-8`,
  goHomeButton: `bg-blue-500 px-6 py-3 rounded-lg shadow-sm`,
  goHomeButtonText: `text-white font-semibold`,
};
