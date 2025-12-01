import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { DifficultyProvider } from './src/context/DifficultyContext';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <DifficultyProvider>
        <AppNavigator />
      </DifficultyProvider>
    </ThemeProvider>
  );
}