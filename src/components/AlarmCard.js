import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AlarmCard = ({ time }) => (
  <View style={styles.card}>
    <Text style={styles.timeText}>{time}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  timeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default AlarmCard;