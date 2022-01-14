import React, { createContext, useContext, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import ThemeReducer, { IThemeStates } from './ThemeReducer';

interface IThemetProvider {
  children: React.ReactNode;
}

const initialState: IThemeStates = {
  isDark: false,
  setTheme: () => {},
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({
  children,
}: React.PropsWithChildren<IThemetProvider>) => {
  const themeStateValues = useThemeProvider();
  return (
    <ThemeContext.Provider value={themeStateValues}>
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeProvider = () => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const isDarkFromScheme = useColorScheme() === 'dark';

  React.useEffect(() => {
    setTheme(isDarkFromScheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { isDark } = state;
  const setTheme = (x: boolean) => {
    console.log('setTheme', x);
    dispatch({
      type: 'SET_THEME',
      payload: x,
    });
  };

  return { ...state, isDark, setTheme };
};

export default function useThemContext() {
  const themeStates = useContext(ThemeContext);
  return themeStates;
}
