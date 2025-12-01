// src/components/BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeStyles } from '../hooks/useThemeStyles';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface BackButtonProps {
  to?: keyof RootStackParamList; // default is 'Home'
  label?: string;                // default is "← Back"
}

export default function BackButton({ to = 'Home', label = '← Back' }: BackButtonProps) {
  const navigation = useNavigation<NavProp>();
  const { styles, colors } = useThemeStyles();

  return (
    <TouchableOpacity 
      style={{ marginBottom: 20, alignSelf: 'flex-start' }} 
      onPress={() => navigation.navigate(to)}
    >
      <Text style={{ fontSize: 16, color: colors.primary, fontWeight: '600' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}