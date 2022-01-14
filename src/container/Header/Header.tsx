import React from 'react';
import { Text, View } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { useTheme } from '@react-navigation/native';

import useThemContext from '../../context/ThemeContext/ThemeContext';
import useStyles from './HeaderStyle';

const Header = () => {
  const { isDark, setTheme } = useThemContext();
  const { colors } = useTheme();
  const styles = useStyles();

  // console.log('isDark', isDark);

  const initialIndex = isDark ? 1 : 0;
  const switchBackgroundColor = colors.background;

  const options = [
    { label: '🌞', value: 'light', activeColor: colors.primary },
    { label: '🌜', value: 'dark', activeColor: colors.primary },
  ];

  return (
    <View style={styles.root}>
      <View style={styles.columnContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> Time Table </Text>
        </View>
        <View style={[styles.switchContainer]}>
          <SwitchSelector
            options={options}
            initial={initialIndex}
            onPress={value => {
              // console.log('value', value);
              setTheme(value === 'dark');
            }}
            fontSize={20}
            backgroundColor={switchBackgroundColor}
            style={styles.switchBorder}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
