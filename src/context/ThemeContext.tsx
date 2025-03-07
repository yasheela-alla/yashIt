import React, { createContext, useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import GifComponent from '@/components/Gif';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
  isChanging: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsChanging(true);
    
    setTimeout(() => {
      setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
      setIsChanging(false);
    }, 2200);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isChanging }}>
      {children}
      <AnimatePresence>
        {isChanging && <GifComponent />}
      </AnimatePresence>
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
