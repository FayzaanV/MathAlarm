// src/screens/PracticeScreen.tsx
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking, Platform, ScrollView } from 'react-native';
import { DifficultyContext } from '../context/DifficultyContext';
import { generateQuestion } from '../utils/questionGenerator';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeStyles } from '../hooks/useThemeStyles';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Practice'>;

const SHORTCUT_NAME = 'DisableAlarm';
const SHORTCUT_URL = `shortcuts://run-shortcut?name=${encodeURIComponent(SHORTCUT_NAME)}`;

export default function PracticeScreen() {
  const { difficulty } = useContext(DifficultyContext);
  const [q, setQ] = useState(generateQuestion(difficulty));
  const [input, setInput] = useState('');
  const navigation = useNavigation<NavProp>();
  const { styles, colors } = useThemeStyles();

  const triggerDisableAlarmShortcut = async () => {
    if (Platform.OS !== 'ios') {
      // Shortcuts are iOS-only
      return;
    }

    try {
      // Check if the Shortcuts URL scheme is supported
      const canOpen = await Linking.canOpenURL(SHORTCUT_URL);

      if (canOpen) {
        // Open the Shortcut
        await Linking.openURL(SHORTCUT_URL);
      } else {
        // If the URL scheme isn't supported, show a helpful message
        Alert.alert(
          'Shortcut Not Found',
          `The "${SHORTCUT_NAME}" Shortcut was not found. Please make sure you've created it in the Shortcuts app.`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Error triggering Shortcut:', error);
      Alert.alert(
        'Error',
        'Unable to trigger the Shortcut. Please make sure the Shortcuts app is installed and the Shortcut is set up correctly.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleCorrectAnswer = async () => {
    // Trigger the DisableAlarm Shortcut
    await triggerDisableAlarmShortcut();

    // Navigate to Home
    navigation.navigate('Home');
  };

  const checkAnswer = () => {
    if (parseInt(input) === q.answer) {
      Alert.alert(
        '✅ Correct!',
        'Great job! Your alarm will be disabled.',
        [
          {
            text: 'OK',
            onPress: handleCorrectAnswer
          },
        ]
      );
    } else {
      Alert.alert('❌ Try again!', 'Incorrect answer. Please try again.');
      setInput(''); // Clear input for retry
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, alignItems: 'center', paddingTop: 20 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Solve to Disable Alarm</Text>
        <Text style={[styles.subtitle, { marginBottom: 32 }]}>Solve this problem to turn off your alarm</Text>

        <View style={styles.card}>
          <Text style={[styles.text, { fontSize: 24, fontWeight: '700', marginBottom: 32, color: colors.neutral[900] }]}>
            {q.question}
          </Text>

          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={input}
            onChangeText={setInput}
            placeholder="Enter answer"
            placeholderTextColor={styles.footerText.color}
            autoFocus={true}
          />

          <TouchableOpacity style={styles.primaryButton} onPress={checkAnswer}>
            <Text style={styles.primaryButtonText}>Submit Answer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}