import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const getCardStyles = (props: any) =>
  StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: props.colors.card,
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
    },
    defaultTextStyle: {
      color: props.colors.text,
    },
  });

function useCardStyles() {
  const { colors } = useTheme();
  // We only want to recompute the stylesheet on changes in color.
  const styles = React.useMemo(() => getCardStyles({ colors }), [colors]);

  return styles;
}

export default useCardStyles;
