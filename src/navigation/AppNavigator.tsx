// src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/Settings';
import TutorialScreen from '../screens/TutorialScreen';
import PracticeScreen from '../screens/PracticeScreen';

export type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Tutorial: undefined;
  Practice: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

// 🚀 Add your deep link config here
const linking = {
  prefixes: ['mathalarm://'],   // Your custom URL scheme
  config: {
    screens: {
      Practice: 'startProblem', // mathalarm://startProblem → PracticeScreen
      Home: 'home',             // Optional: mathalarm://home → HomeScreen
      Settings: 'settings',     // Optional
      Tutorial: 'tutorial',     // Optional
    },
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Practice" component={PracticeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
