// src/screens/Settings.tsx
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import { DifficultyContext } from '../context/DifficultyContext';
import { ThemeContext } from '../context/ThemeContext';
import BackButton from '../components/BackButton';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function SettingsScreen() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const { theme, toggleTheme, isDark } = useContext(ThemeContext);
  const { styles, colors } = useThemeStyles();

  return (
    <View style={styles.container}>
      <BackButton />

      <Text style={styles.title}>Settings</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.text, { textAlign: 'left', fontSize: 17, fontWeight: '600' }]}>
              Dark Mode
            </Text>
            <Text style={[styles.bodyText, { textAlign: 'left', marginTop: 4 }]}>
              Switch to dark theme for better viewing in low light
            </Text>
          </View>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: colors.neutral[200], true: colors.primary }}
            thumbColor={isDark ? colors.neutral[900] : colors.white}
            ios_backgroundColor={colors.neutral[200]}
          />
        </View>
      </View>

      {/* Difficulty Selection */}
      <Text style={[styles.subtitle, { marginTop: 8, marginBottom: 16 }]}>Select Difficulty</Text>

      <TouchableOpacity
        style={[
          styles.button,
          difficulty === 'easy' && styles.primaryButton,
        ]}
        onPress={() => setDifficulty('easy')}
      >
        <Text
          style={[
            difficulty === 'easy' ? styles.primaryButtonText : styles.buttonText,
          ]}
        >
          Easy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          difficulty === 'medium' && styles.primaryButton,
        ]}
        onPress={() => setDifficulty('medium')}
      >
        <Text
          style={[
            difficulty === 'medium' ? styles.primaryButtonText : styles.buttonText,
          ]}
        >
          Medium
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          difficulty === 'hard' && styles.primaryButton,
        ]}
        onPress={() => setDifficulty('hard')}
      >
        <Text
          style={[
            difficulty === 'hard' ? styles.primaryButtonText : styles.buttonText,
          ]}
        >
          Hard
        </Text>
      </TouchableOpacity>
    </View>
  );
}