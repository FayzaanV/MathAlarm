// src/components/BackButton.tsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeStyles } from '../hooks/useThemeStyles';

type NavProp = NativeStackNavigationProp<RootStackParamList>;

interface BackButtonProps {
  to?: keyof RootStackParamList; // fallback route if can't go back
  label?: string;                // default is "← Back"
}

export default function BackButton({ to = 'Home', label = '← Back' }: BackButtonProps) {
  const navigation = useNavigation<NavProp>();
  const { styles, colors } = useThemeStyles();

  const handlePress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      // Fallback if there's no previous screen (e.g., opened via deep link)
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity 
      style={{ marginBottom: 20, alignSelf: 'flex-start' }} 
      onPress={handlePress}
      activeOpacity={0.7}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={{ fontSize: 16, color: colors.primary, fontWeight: '600' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}