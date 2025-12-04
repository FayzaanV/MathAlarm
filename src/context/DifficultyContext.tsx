import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Safely import AsyncStorage - it may be null if native module isn't linked
let AsyncStorage: any = null;
try {
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} catch (error) {
  console.warn('AsyncStorage not available:', error);
}

type Difficulty = 'easy' | 'medium' | 'hard';

interface DifficultyContextType {
  difficulty: Difficulty;
  setDifficulty: (level: Difficulty) => void;
}

export const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: 'easy',
  setDifficulty: () => { },
});

export const DifficultyProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficultyState] = useState<Difficulty>('easy');

  useEffect(() => {
    const loadDifficulty = async () => {
      if (!AsyncStorage) {
        console.warn('AsyncStorage not available, using default difficulty');
        return;
      }
      try {
        const savedDifficulty = await AsyncStorage.getItem('difficulty');
        if (savedDifficulty) {
          setDifficultyState(savedDifficulty as Difficulty);
        }
      } catch (error) {
        console.error('Failed to load difficulty:', error);
      }
    };
    loadDifficulty();
  }, []);

  const setDifficulty = async (level: Difficulty) => {
    setDifficultyState(level);
    if (AsyncStorage) {
      try {
        await AsyncStorage.setItem('difficulty', level);
      } catch (error) {
        console.error('Failed to save difficulty:', error);
      }
    }
  };

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};