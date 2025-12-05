"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: Array<{
    value: Theme;
    label: string;
  }>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Simplified professional themes - only Light and Dark
export const themes = [
  {
    value: 'light' as Theme,
    label: 'Light',
  },
  {
    value: 'dark' as Theme,
    label: 'Dark',
  },
];

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark'); // Start with default theme
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize theme from localStorage on client side
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && themes.find(t => t.value === savedTheme)) {
      setTheme(savedTheme);
    }
    setIsHydrated(true);
  }, []);

  // Apply theme immediately when it changes
  useEffect(() => {
    if (!isHydrated) return;
    
    // Save theme to localStorage
    localStorage.setItem('theme', theme);
    
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove all theme classes
    themes.forEach(t => {
      root.classList.remove(`theme-${t.value}`);
    });
    
    // Add current theme class
    root.classList.add(`theme-${theme}`);
    
    // Handle dark mode - theme IS the dark mode
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme, isHydrated]);

  const value = {
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

