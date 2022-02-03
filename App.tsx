import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation/Navigation';
import { ThemeProvider } from './src/context/ThemeContext/ThemeContext';
import { GlobalProvider } from './src/context/GlobalContext/GlobalContext';

export default function App() {
  return (
    <ThemeProvider>
      <GlobalProvider>
        <SafeAreaProvider>
          <StatusBar />
          <Navigation />
        </SafeAreaProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}
