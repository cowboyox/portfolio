// contexts/MyContext.js
import { createContext, useContext } from 'react';

import useThemeSwitcher from '@/hooks/useThemeSwitcher';

// Create a context with default values
const PortfolioContext = createContext();

// Create a provider component
export const PortfolioContextProvider = ({ children }) => {
  const [activeTheme, setTheme] = useThemeSwitcher();

  return (
    <PortfolioContext.Provider value={{ activeTheme, setTheme }}>
      {children}
    </PortfolioContext.Provider>
  );
};

// Custom hook to use context easily in other components
export const usePortfolioContext = () => useContext(PortfolioContext);
