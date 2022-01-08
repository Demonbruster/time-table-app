import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TodayScreen, TomorrowScreen, WeekScreen } from '../screens';
import useThemContext from '../context/ThemeContext/ThemeContext';

const Tab = createMaterialTopTabNavigator();

function SampleApp() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="Tomorrow" component={TomorrowScreen} />
      <Tab.Screen name="Week" component={WeekScreen} />
    </Tab.Navigator>
  );
}

function Navigation() {
  const { isDark } = useThemContext();

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <SampleApp />
    </NavigationContainer>
  );
}

export default Navigation;
