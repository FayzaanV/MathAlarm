// src/context/DifficultyContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type Difficulty = 'easy' | 'medium' | 'hard';

interface DifficultyContextType {
  difficulty: Difficulty;
  setDifficulty: (level: Difficulty) => void;
}

export const DifficultyContext = createContext<DifficultyContextType>({
  difficulty: 'easy',
  setDifficulty: () => {},
});

export const DifficultyProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};