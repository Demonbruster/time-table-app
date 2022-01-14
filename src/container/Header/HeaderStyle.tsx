import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const getHeaderStyle = (props: any) =>
  StyleSheet.create({
    root: {
      height: 70,
      backgroundColor: props.colors.background,
    },
    columnContainer: {
      flexDirection: 'row',
      flex: 1,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    switchContainer: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: props.colors.text,
    },
    container: {
      flex: 1,
      backgroundColor: props.colors.backgroundColor,
    },
    switchBorder: {
      borderWidth: 2,
      borderRadius: 50,
      borderColor: props.colors.border,
    },
  });

function useHeaderStyle() {
  const { colors } = useTheme();

  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getHeaderStyle({ colors }), [colors]);

  return styles;
}

export default useHeaderStyle;
