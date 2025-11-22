// src/screens/PracticeScreen.tsx
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { DifficultyContext } from '../context/DifficultyContext';
import { generateQuestion } from '../utils/questionGenerator';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import globalStyles from '../styles/global';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Practice'>;

export default function PracticeScreen() {
  const { difficulty } = useContext(DifficultyContext);
  const [q, setQ] = useState(generateQuestion(difficulty));
  const [input, setInput] = useState('');
  const navigation = useNavigation<NavProp>();

  const checkAnswer = () => {
    if (parseInt(input) === q.answer) {
      Alert.alert('✅ Correct!', 'You solved the problem.', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    } else {
      Alert.alert('❌ Try again!', 'Incorrect answer. Please try again.');
    }
  };

  return (
    <View style={[globalStyles.container, { alignItems: 'center' }]}>
      <Text style={globalStyles.title}>Practice Problem</Text>
      <Text style={globalStyles.text}>{q.question}</Text>

      <TextInput
        style={globalStyles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder="Enter answer"
      />

      <TouchableOpacity style={globalStyles.primaryButton} onPress={checkAnswer}>
        <Text style={globalStyles.primaryButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}