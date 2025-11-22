// src/screens/TutorialScreen.tsx
import React from 'react';
import { ScrollView, Text } from 'react-native';
import BackButton from '../components/BackButton';
import globalStyles from '../styles/global';

export default function TutorialScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <BackButton />

      <Text style={globalStyles.title}>How to Set Up Shortcuts</Text>
      <Text style={globalStyles.text}>
        MathAlarm is designed to work with iOS Shortcuts. Follow these steps:
      </Text>

      <Text style={globalStyles.step}>1. Open the Shortcuts app on your device.</Text>
      <Text style={globalStyles.step}>2. Create a new automation for your alarm time.</Text>
      <Text style={globalStyles.step}>3. Add the MathAlarm app as the action.</Text>
      <Text style={globalStyles.step}>4. Save and enable the automation.</Text>

      <Text style={globalStyles.footerText}>
        Once set up, MathAlarm will require solving math problems to dismiss your alarm.
      </Text>
    </ScrollView>
  );
}
