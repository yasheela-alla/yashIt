import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import GifComponent from "@/components/Gif";
import Image from "next/image";
import previewImage from "@/public/STOP.jpg"; 

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  const [isChanging, setIsChanging] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // Added state for preview

  useEffect(() => {
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setIsChanging(true);

    setTimeout(() => {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      setIsChanging(false);
    }, 2200);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      <AnimatePresence>{isChanging && <GifComponent />}</AnimatePresence>

      {/* Light Theme Preview on Hover */}
      <button
        onMouseEnter={() => setShowPreview(true)}
        onMouseLeave={() => setShowPreview(false)}
        onClick={toggleTheme}
        className="fixed bottom-5 right-5 p-2 bg-gray-800 text-white rounded-md dark:bg-gray-200 dark:text-black"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>

      {showPreview && (
        <div className="absolute bottom-16 right-5 z-50 w-40 h-40 bg-black rounded-md shadow-lg">
          <Image src={previewImage} alt="Light Theme Preview" className="rounded-md" />
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
