// src/hooks/useThemeStyles.ts
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { getGlobalStyles, getColors } from '../styles/global';

export const useThemeStyles = () => {
  const { theme } = useContext(ThemeContext);
  const styles = getGlobalStyles(theme);
  const colors = getColors(theme);
  
  return { styles, colors, theme };
};



