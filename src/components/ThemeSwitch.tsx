import React, { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'blue' | 'pink' | 'green';

interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
}

const themeColors: Record<Theme, ThemeColors> = {
  blue: {
    primary: '#3f51b5',
    secondary: '#f50057',
    background: '#041E42',
    text: '#ffffff',
  },
  pink: {
    primary: '#FF69B4',
    secondary: '#FF1493',
    background: '#FFC0CB',
    text: '#000000',
  },
  green: {
    primary: '#4CAF50',
    secondary: '#45a049',
    background: '#003B00',
    text: '#00FF00',
  },
};

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  colors: ThemeColors;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('blue');

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    // Ici, vous pourriez ajouter une logique pour précharger les ressources du nouveau thème
  };

  const colors = themeColors[currentTheme];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};