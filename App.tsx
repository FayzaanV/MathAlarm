import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { DifficultyProvider } from './src/context/DifficultyContext';

export default function App() {
  return (
    <DifficultyProvider>
      <AppNavigator />
    </DifficultyProvider>
  );
}