import { Text as RNText, TextProps } from 'react-native';
import React from 'react';
import useGlobalStyles from '../styles/GlobalStyles';

const Text = (props: TextProps) => {
  const styles = useGlobalStyles();
  return <RNText {...props} style={[styles.defaultTextStyle, props.style]} />;
};

export default Text;
