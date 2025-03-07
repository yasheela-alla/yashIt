import React, { createContext, useContext, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import GifComponent from '@/components/Gif';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('dark');
  const [isChanging, setIsChanging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

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
      setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
      setIsChanging(false);
    }, 2200);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isChanging }}>
      {children}
      <AnimatePresence>{isChanging && <GifComponent />}</AnimatePresence>

      {/* Light Theme Preview Image */}
      <div
        className="absolute bottom-16 right-5 z-50 w-40 h-40 bg-black rounded-md shadow-lg"
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
      >
        {showPreview && (
          <img
            src="/STOP.jpg"
            alt="Light Theme Preview"
            className="rounded-md"
          />
        )}
      </div>
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
