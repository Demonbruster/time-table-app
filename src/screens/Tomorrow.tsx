import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';

interface Props {}

const Tomorrow = (_props: Props) => {
  return (
    <View style={styles.root}>
      <Text> Hi i'm Tomorrow screen </Text>
    </View>
  );
};

export default Tomorrow;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
