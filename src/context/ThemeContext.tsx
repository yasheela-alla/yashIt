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

  const toggleTheme = () => {
    setIsChanging(true);
    
    setTimeout(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, 1000);
    
    setTimeout(() => {
      setIsChanging(false);
    }, 3000);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      document.body.style.backgroundColor = '#111010';
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f4f4f5';
    }
  }, [theme]);

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