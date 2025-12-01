// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeStyles } from '../hooks/useThemeStyles';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();
  const { styles } = useThemeStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Replace source with your app logo in src/assets and require it here */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>MathAlarm</Text>
      </View>

      {/* Inline style for the buttons wrapper */}
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tutorial')}
        >
          <Text style={styles.buttonText}>How to set up Shortcuts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Practice')}
        >
          <Text style={styles.primaryButtonText}>Practice Problem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Built for Shortcuts-driven alarms</Text>
      </View>
    </View>
  );
}