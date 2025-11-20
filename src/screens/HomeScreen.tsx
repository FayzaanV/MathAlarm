import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type NavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<NavProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Replace source with your app logo in src/assets and require it here */}
        <Image
          source={require('C:/ReactNativeProjects/MathAlarm/src/assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>MathAlarm</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tutorial')}>
          <Text style={styles.buttonText}>How to set up Shortcuts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Practice')}>
          <Text style={styles.primaryButtonText}>Practice Problem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Built for Shortcuts-driven alarms</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 24, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 40 },
  logo: { width: 88, height: 88, marginBottom: 12 },
  title: { fontSize: 28, fontWeight: '700', color: '#0B1220' },
  buttons: { flex: 1, justifyContent: 'flex-start' },
  button: {
    backgroundColor: '#F4F6F9',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  buttonText: { color: '#1B2545', fontSize: 16, fontWeight: '600' },
  primaryButton: {
    marginTop: 12,
    backgroundColor: '#2E7DFA',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  footer: { paddingVertical: 20, alignItems: 'center' },
  footerText: { color: '#8891A6', fontSize: 13 },
});