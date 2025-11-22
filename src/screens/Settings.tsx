// src/screens/Settings.tsx
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DifficultyContext } from '../context/DifficultyContext';
import BackButton from '../components/BackButton';
import globalStyles from '../styles/global';

export default function SettingsScreen() {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);

  return (
    <View style={globalStyles.container}>
      <BackButton />

      <Text style={globalStyles.title}>Settings</Text>
      <Text style={globalStyles.subtitle}>Select Difficulty</Text>

      <TouchableOpacity
        style={[globalStyles.button, difficulty === 'easy' && globalStyles.primaryButton]}
        onPress={() => setDifficulty('easy')}
      >
        <Text style={globalStyles.buttonText}>Easy</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, difficulty === 'medium' && globalStyles.primaryButton]}
        onPress={() => setDifficulty('medium')}
      >
        <Text style={globalStyles.buttonText}>Medium</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[globalStyles.button, difficulty === 'hard' && globalStyles.primaryButton]}
        onPress={() => setDifficulty('hard')}
      >
        <Text style={globalStyles.buttonText}>Hard</Text>
      </TouchableOpacity>
    </View>
  );
}