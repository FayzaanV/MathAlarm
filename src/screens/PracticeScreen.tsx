// src/screens/PracticeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

// Navigation prop type for this screen
type PracticeNavProp = NativeStackNavigationProp<RootStackParamList, 'Practice'>;

export default function PracticeScreen() {
  const navigation = useNavigation<PracticeNavProp>();

  // simple inline question for demo
  const [q] = useState(() => ({ id: 'p1', expression: '2 + 3', answer: 5 }));
  const [input, setInput] = useState('');

  function submit() {
    const num = parseInt(input, 10);
    if (!Number.isFinite(num)) {
      Alert.alert('Please enter a number');
      return;
    }

    if (num === q.answer) {
      Alert.alert(
        'Correct',
        'Well done!',
        [
          {
            text: 'OK',
            onPress: () => {
              // navigate back to Home
              navigation.navigate('Home');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Incorrect', 'Try again.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Problem</Text>
      <Text style={styles.expr}>{q.expression}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder="Answer"
      />
      <TouchableOpacity style={styles.submit} onPress={submit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:'#fff',padding:24,alignItems:'center',paddingTop:80},
  title:{fontSize:20,fontWeight:'700',marginBottom:18},
  expr:{fontSize:28,fontWeight:'800',marginBottom:16},
  input:{width:'60%',height:44,borderWidth:1,borderColor:'#e2e6ef',borderRadius:8,textAlign:'center',fontSize:18,marginBottom:14},
  submit:{backgroundColor:'#2E7DFA',paddingVertical:12,paddingHorizontal:28,borderRadius:10},
  submitText:{color:'#fff',fontWeight:'700'}
});