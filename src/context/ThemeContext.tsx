// src/context/ThemeContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';

// Safely import AsyncStorage - it may be null if native module isn't linked
let AsyncStorage: any = null;
try {
  AsyncStorage = require('@react-native-async-storage/async-storage').default;
} catch (error) {
  console.warn('AsyncStorage not available:', error);
}

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isDark: false,
  toggleTheme: () => { },
  setTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const loadTheme = async () => {
      if (!AsyncStorage) {
        console.warn('AsyncStorage not available, using default theme');
        return;
      }
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        if (savedTheme) {
          setThemeState(savedTheme as Theme);
        }
      } catch (error) {
        console.error('Failed to load theme:', error);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      if (AsyncStorage) {
        AsyncStorage.setItem('theme', newTheme).catch((error: any) =>
          console.error('Failed to save theme:', error)
        );
      }
      return newTheme;
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    if (AsyncStorage) {
      AsyncStorage.setItem('theme', newTheme).catch((error: any) =>
        console.error('Failed to save theme:', error)
      );
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark: theme === 'dark',
        toggleTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};



