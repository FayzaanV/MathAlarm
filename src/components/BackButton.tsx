// src/components/BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface BackButtonProps {
  to?: keyof RootStackParamList; // default is 'Home'
  label?: string;                // default is "← Back"
}

export default function BackButton({ to = 'Home', label = '← Back' }: BackButtonProps) {
  const navigation = useNavigation<NavProp>();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(to)}>
      <Text style={styles.backButtonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: { marginBottom: 20, alignSelf: 'flex-start' },
  backButtonText: { fontSize: 16, color: '#2E7DFA', fontWeight: '600' },
});