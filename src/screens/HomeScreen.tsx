// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import globalStyles from '../styles/global';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        {/* Replace source with your app logo in src/assets and require it here */}
        <Image
          source={require('../assets/logo.png')}
          style={globalStyles.logo}
          resizeMode="contain"
        />
        <Text style={globalStyles.title}>MathAlarm</Text>
      </View>

      {/* Inline style for the buttons wrapper */}
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={globalStyles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={globalStyles.buttonText}>How to set up Shortcuts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={globalStyles.primaryButton}
          onPress={() => navigation.navigate('Practice')}
        >
          <Text style={globalStyles.primaryButtonText}>Practice Problem</Text>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.footer}>
        <Text style={globalStyles.footerText}>Built for Shortcuts-driven alarms</Text>
      </View>
    </View>
  );
}