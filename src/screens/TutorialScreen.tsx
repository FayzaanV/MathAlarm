// src/screens/TutorialScreen.tsx
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import BackButton from '../components/BackButton';
import { useThemeStyles } from '../hooks/useThemeStyles';

export default function TutorialScreen() {
  const { styles, colors } = useThemeStyles();

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      <BackButton />

      <Text style={styles.title}>Setup Guide</Text>
      <Text style={[styles.subtitle, { marginBottom: 32 }]}>
        Configure Apple Shortcuts to make MathAlarm your alarm gate
      </Text>

      <View style={styles.card}>
        <Text style={[styles.title, { fontSize: 24, marginBottom: 16 }]}>
          Part 1: Create the DisableAlarm Shortcut
        </Text>
        <Text style={[styles.bodyText, { marginBottom: 20 }]}>
          This Shortcut will be automatically triggered by MathAlarm after you solve a problem. It will disable your alarm permanently.
        </Text>

        <Text style={[styles.step, { marginTop: 8 }]}>
          <Text style={styles.stepNumber}>1.</Text>
          Open the <Text style={{ fontWeight: '700' }}>Shortcuts</Text> app on your iPhone or iPad.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>2.</Text>
          Tap the <Text style={{ fontWeight: '700' }}>"+"</Text> button in the top-right corner to create a new Shortcut.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>3.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Add Action"</Text> and search for <Text style={{ fontWeight: '700' }}>"Toggle Alarm"</Text>.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>4.</Text>
          Select the <Text style={{ fontWeight: '700' }}>"Toggle Alarm"</Text> action.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>5.</Text>
          In the action settings:
          {'\n'}   • Select your <Text style={{ fontWeight: '700' }}>specific morning alarm</Text> from the dropdown
          {'\n'}   • Set the toggle to <Text style={{ fontWeight: '700' }}>"Off"</Text> (this will disable the alarm)
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>6.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Next"</Text> in the top-right corner.
        </Text>

        <Text style={[styles.step, { marginBottom: 0 }]}>
          <Text style={styles.stepNumber}>7.</Text>
          Name the Shortcut exactly: <Text style={{ fontWeight: '700', color: colors.primary }}>"DisableAlarm"</Text>
          {'\n'}   <Text style={[styles.footerText, { fontSize: 14, marginTop: 4 }]}>
            ⚠️ The name must be exactly "DisableAlarm" (case-sensitive) for the app to find it.
          </Text>
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>8.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Done"</Text> to save the Shortcut.
        </Text>
      </View>

      <View style={[styles.card, { marginTop: 24 }]}>
        <Text style={[styles.title, { fontSize: 24, marginBottom: 16 }]}>
          Part 2: Create the Automation
        </Text>
        <Text style={[styles.bodyText, { marginBottom: 20 }]}>
          This Automation will open MathAlarm when you snooze your alarm, forcing you to solve a problem before the alarm can be disabled.
        </Text>

        <Text style={[styles.step, { marginTop: 8 }]}>
          <Text style={styles.stepNumber}>1.</Text>
          In the Shortcuts app, tap the <Text style={{ fontWeight: '700' }}>"Automation"</Text> tab at the bottom.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>2.</Text>
          Tap the <Text style={{ fontWeight: '700' }}>"+"</Text> button in the top-right corner to create a new automation.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>3.</Text>
          Select <Text style={{ fontWeight: '700' }}>"Create Personal Automation"</Text>.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>4.</Text>
          Scroll down and tap <Text style={{ fontWeight: '700' }}>"Alarm"</Text>.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>5.</Text>
          Configure the trigger:
          {'\n'}   • Select <Text style={{ fontWeight: '700' }}>"When [Your Alarm Name] is Snoozed"</Text>
          {'\n'}   • Choose your <Text style={{ fontWeight: '700' }}>specific morning alarm</Text> from the list
          {'\n'}   • Make sure it's set to trigger on <Text style={{ fontWeight: '700' }}>"Snoozed"</Text>
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>6.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Next"</Text>.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>7.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Add Action"</Text> and search for <Text style={{ fontWeight: '700' }}>"Open App"</Text>.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>8.</Text>
          Select the <Text style={{ fontWeight: '700' }}>"Open App"</Text> action.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>9.</Text>
          Tap on <Text style={{ fontWeight: '700' }}>"Choose"</Text> and select <Text style={{ fontWeight: '700' }}>"MathAlarm"</Text> from your apps list.
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>10.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Next"</Text>.
        </Text>

        <Text style={[styles.step, { marginBottom: 0 }]}>
          <Text style={styles.stepNumber}>11.</Text>
          Toggle <Text style={{ fontWeight: '700' }}>"Ask Before Running"</Text> to <Text style={{ fontWeight: '700' }}>OFF</Text> (this is important so it runs automatically).
        </Text>

        <Text style={styles.step}>
          <Text style={styles.stepNumber}>12.</Text>
          Tap <Text style={{ fontWeight: '700' }}>"Done"</Text> to save the automation.
        </Text>
      </View>

      <View style={[styles.card, { 
        marginTop: 24, 
        backgroundColor: colors.warning === '#F59E0B' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(251, 191, 36, 0.15)',
        borderColor: colors.warning === '#F59E0B' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(251, 191, 36, 0.4)'
      }]}>
        <Text style={[styles.title, { fontSize: 20, marginBottom: 12, color: colors.warning }]}>
          How It Works
        </Text>
        <Text style={[styles.bodyText, { lineHeight: 22 }]}>
          <Text style={{ fontWeight: '700' }}>1.</Text> Your alarm rings in the Clock app.
          {'\n\n'}
          <Text style={{ fontWeight: '700' }}>2.</Text> You hit "Snooze" on the alarm.
          {'\n\n'}
          <Text style={{ fontWeight: '700' }}>3.</Text> The Automation triggers and opens MathAlarm automatically.
          {'\n\n'}
          <Text style={{ fontWeight: '700' }}>4.</Text> You solve the math problem on the Practice screen.
          {'\n\n'}
          <Text style={{ fontWeight: '700' }}>5.</Text> When you tap "OK" after solving, MathAlarm automatically triggers the "DisableAlarm" Shortcut.
          {'\n\n'}
          <Text style={{ fontWeight: '700' }}>6.</Text> Your alarm is permanently disabled—no more snoozing!
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, { marginTop: 8 }]}>
          Need help? Make sure both the Shortcut and Automation are set up correctly.
        </Text>
      </View>
    </ScrollView>
  );
}
