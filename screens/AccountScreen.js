import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AccountScreen() {
  return (
    <View>
      <StatusBar style="light" />
      <SafeAreaView>
        <Text>AccountScreen</Text>
      </SafeAreaView>
    </View>
  );
}