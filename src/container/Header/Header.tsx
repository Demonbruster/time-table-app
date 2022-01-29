import React from 'react';
import { Text, View } from 'react-native';
import Switch from 'expo-dark-mode-switch';

import useThemContext from '../../context/ThemeContext/ThemeContext';
import useStyles from './HeaderStyle';

const Header = () => {
  const { isDark, setTheme } = useThemContext();
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <View style={styles.columnContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Time Table </Text>
        </View>
        <View style={[styles.switchContainer]}>
          <Switch value={isDark} onChange={setTheme} />
        </View>
      </View>
    </View>
  );
};

export default Header;
