import React from 'react';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TodayScreen, TomorrowScreen, WeekScreen } from '../screens';
import useThemContext from '../context/ThemeContext/ThemeContext';
import Header from '../container/Header';
import { createStackNavigator } from '@react-navigation/stack';
import DayScreen from '../screens/DayScreen';

const Tab = createMaterialTopTabNavigator();

function TabBar() {
  return (
    <>
      <Header />
      <Tab.Navigator>
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Tomorrow" component={TomorrowScreen} />
        <Tab.Screen name="Week" component={WeekScreen} />
      </Tab.Navigator>
    </>
  );
}

const Root = createStackNavigator();

function RootNav() {
  return (
    <Root.Navigator>
      <Root.Screen
        name="Home"
        component={TabBar}
        options={{ headerShown: false }}
      />
      <Root.Group screenOptions={{ presentation: 'modal' }}>
        <Root.Screen
          name="DayScreen"
          component={DayScreen}
          options={{ title: 'Set my day 😉' }}
        />
      </Root.Group>
    </Root.Navigator>
  );
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fafafa',
    text: '#333',
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#222',
    text: '#fafafa',
  },
};

function Navigation() {
  const { isDark } = useThemContext();

  return (
    <NavigationContainer theme={isDark ? darkTheme : theme}>
      <RootNav />
    </NavigationContainer>
  );
}

export default Navigation;
