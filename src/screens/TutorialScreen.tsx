// src/screens/TutorialScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TutorialScreen() {
  const nav = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Shortcuts Setup Tutorial</Text>
      <Text style={styles.paragraph}>
        Provide step-by-step instructions here for teammates to wire Shortcuts to the app.
      </Text>
      <TouchableOpacity onPress={() => nav.goBack()} style={styles.back}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{padding:24,backgroundColor:'#fff',flexGrow:1},
  title:{fontSize:22,fontWeight:'700',marginBottom:12},
  paragraph:{color:'#444',lineHeight:22},
  back:{marginTop:24},
  backText:{color:'#2E7DFA'}
});