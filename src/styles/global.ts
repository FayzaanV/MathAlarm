// src/styles/global.ts
import { StyleSheet, Platform } from 'react-native';
import type { Theme } from '../context/ThemeContext';

// Professional Color Palette - Light Theme
const lightColors = {
  primary: '#1E3A8A',      // Deep blue - primary brand color
  secondary: '#3B82F6',    // Vibrant blue - secondary actions
  accent: '#60A5FA',       // Bright blue - highlights and accents
  success: '#10B981',      // Green - success states
  warning: '#F59E0B',      // Amber - warnings
  error: '#EF4444',        // Red - errors
  neutral: {
    50: '#F9FAFB',         // Lightest background
    100: '#F3F4F6',        // Light background
    200: '#E5E7EB',        // Border/subtle background
    300: '#D1D5DB',        // Disabled states
    400: '#9CA3AF',        // Placeholder text
    500: '#6B7280',        // Secondary text
    600: '#4B5563',        // Body text
    700: '#374151',        // Heading text
    800: '#1F2937',        // Dark text
    900: '#111827',        // Darkest text
  },
  white: '#FFFFFF',
  black: '#000000',
};

// Professional Color Palette - Dark Theme
const darkColors = {
  primary: '#60A5FA',       // Bright blue - primary brand color (lighter for dark mode)
  secondary: '#3B82F6',     // Vibrant blue - secondary actions
  accent: '#93C5FD',        // Light blue - highlights and accents
  success: '#34D399',        // Light green - success states
  warning: '#FBBF24',       // Light amber - warnings
  error: '#F87171',         // Light red - errors
  neutral: {
    50: '#111827',          // Darkest background (inverted)
    100: '#1F2937',         // Dark background
    200: '#374151',         // Border/subtle background
    300: '#4B5563',         // Disabled states
    400: '#6B7280',         // Placeholder text
    500: '#9CA3AF',        // Secondary text
    600: '#D1D5DB',        // Body text
    700: '#E5E7EB',        // Heading text
    800: '#F3F4F6',        // Light text
    900: '#FFFFFF',        // Lightest text (inverted)
  },
  white: '#1F2937',         // Dark background instead of white
  black: '#FFFFFF',         // White text instead of black
};

// Get colors based on theme
export const getColors = (theme: Theme) => {
  return theme === 'dark' ? darkColors : lightColors;
};

// Legacy export for backward compatibility (defaults to light)
export const colors = lightColors;

// Create theme-aware styles function
export const getGlobalStyles = (theme: Theme = 'light') => {
  const colors = getColors(theme);
  const isDark = theme === 'dark';

  return StyleSheet.create({
    // Container & Layout
    container: {
      flex: 1,
      backgroundColor: colors.neutral[50],
      paddingHorizontal: 24,
      paddingTop: Platform.OS === 'ios' ? 60 : 40,
      paddingBottom: 20,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    // Header & Logo
    header: {
      alignItems: 'center',
      marginBottom: 48,
      paddingTop: 20,
    },
    logo: {
      width: 180,
      height: 180,
      marginBottom: 16,
      shadowColor: isDark ? colors.primary : colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: isDark ? 0.3 : 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    
    // Typography
    title: {
      fontSize: 32,
      fontWeight: '800',
      color: colors.neutral[900],
      marginBottom: 8,
      letterSpacing: -0.5,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.neutral[700],
      marginBottom: 24,
      textAlign: 'center',
      lineHeight: 26,
    },
    text: {
      fontSize: 16,
      color: colors.neutral[700],
      lineHeight: 24,
      textAlign: 'center',
    },
    bodyText: {
      fontSize: 15,
      color: colors.neutral[600],
      lineHeight: 22,
    },
    step: {
      fontSize: 16,
      color: colors.neutral[700],
      marginBottom: 16,
      lineHeight: 24,
      fontWeight: '500',
    },
    stepNumber: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.primary,
      marginRight: 8,
    },
    
    // Buttons
    button: {
      backgroundColor: colors.white,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 16,
      marginBottom: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1.5,
      borderColor: colors.neutral[200],
      shadowColor: isDark ? '#000000' : colors.neutral[900],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.05,
      shadowRadius: 4,
      elevation: 2,
      minHeight: 56,
    },
    buttonText: {
      color: colors.neutral[800],
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0.3,
    },
    primaryButton: {
      backgroundColor: colors.primary,
      paddingVertical: 18,
      paddingHorizontal: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      marginBottom: 12,
      shadowColor: colors.primary,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: isDark ? 0.5 : 0.3,
      shadowRadius: 8,
      elevation: 6,
      minHeight: 56,
    },
    primaryButtonText: {
      color: isDark ? colors.neutral[900] : colors.white,
      fontSize: 17,
      fontWeight: '700',
      letterSpacing: 0.5,
    },
    secondaryButton: {
      backgroundColor: colors.secondary,
      paddingVertical: 16,
      paddingHorizontal: 24,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8,
      shadowColor: colors.secondary,
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: isDark ? 0.4 : 0.2,
      shadowRadius: 6,
      elevation: 4,
      minHeight: 52,
    },
    secondaryButtonText: {
      color: colors.white,
      fontSize: 16,
      fontWeight: '600',
      letterSpacing: 0.3,
    },
    
    // Input Fields
    input: {
      borderWidth: 2,
      borderColor: colors.neutral[200],
      borderRadius: 12,
      paddingVertical: 16,
      paddingHorizontal: 20,
      width: '70%',
      minWidth: 200,
      textAlign: 'center',
      marginBottom: 24,
      fontSize: 20,
      fontWeight: '600',
      color: colors.neutral[900],
      backgroundColor: colors.white,
      shadowColor: isDark ? '#000000' : colors.neutral[900],
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: isDark ? 0.2 : 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    inputFocused: {
      borderColor: colors.primary,
      shadowColor: colors.primary,
      shadowOpacity: isDark ? 0.4 : 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    
    // Footer
    footer: {
      paddingVertical: 24,
      alignItems: 'center',
      marginTop: 'auto',
    },
    footerText: {
      color: colors.neutral[500],
      fontSize: 13,
      fontWeight: '500',
      textAlign: 'center',
    },
    
    // Card/Container Styles
    card: {
      backgroundColor: colors.white,
      borderRadius: 20,
      padding: 24,
      marginBottom: 16,
      shadowColor: isDark ? '#000000' : colors.neutral[900],
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: isDark ? 0.3 : 0.08,
      shadowRadius: 8,
      elevation: 3,
      borderWidth: 1,
      borderColor: colors.neutral[100],
    },
    
    // Status Colors
    successText: {
      color: colors.success,
      fontWeight: '600',
    },
    errorText: {
      color: colors.error,
      fontWeight: '600',
    },
    warningText: {
      color: colors.warning,
      fontWeight: '600',
    },
  });
};

// Default export for backward compatibility (light theme)
const globalStyles = getGlobalStyles('light');

export default globalStyles;