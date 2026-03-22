import { TextComponent } from '@/design-system';
import { Stack } from 'expo-router';
import React from 'react';

import { View } from 'react-native';


export default function NotFoundScreen() {
  return (
    <View className={styles.container}>
      <Stack.Screen options={{ title: 'Oops!' }} />

      <TextComponent className={styles.title}>{"This screen doesn't exist."}</TextComponent>
    </View>
  );
}

const styles = {
  container: `flex flex-1 bg-white`,
  title: `text-xl font-bold`,
};
