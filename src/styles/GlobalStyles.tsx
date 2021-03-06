import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const getGlobalStyles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.colors.backgroundColor,
    },
    defaultTextStyle: {
      color: props.colors.text,
    },
    buttonContainer: {
      backgroundColor: props.colors.primary,
    },
  });

function useGlobalStyles() {
  const { colors } = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

  return styles;
}

export default useGlobalStyles;
