// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'C:/ReactNativeProjects/MathAlarm/src/screens/HomeScreen';
import SettingsScreen from 'C:/ReactNativeProjects/MathAlarm/src/screens/Settings';
import TutorialScreen from 'C:/ReactNativeProjects/MathAlarm/src/screens/TutorialScreen';
import PracticeScreen from 'C:/ReactNativeProjects/MathAlarm/src/screens/PracticeScreen';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Tutorial: undefined;
  Practice: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Practice" component={PracticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}