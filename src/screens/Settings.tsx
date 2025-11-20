// src/screens/SettingsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity onPress={() => nav.goBack()} style={styles.back}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#fff'},
  title:{fontSize:22,fontWeight:'700',marginBottom:12},
  back:{marginTop:20},
  backText:{color:'#2E7DFA'}
});