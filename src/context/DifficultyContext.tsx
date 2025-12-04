import React, { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    try {
      await AsyncStorage.setItem('difficulty', level);
    } catch (error) {
      console.error('Failed to save difficulty:', error);
    }
  };

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};