import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from '../components/Text';

interface Props {}

const Week = (_props: Props) => {
  return (
    <View style={styles.root}>
      <Text> Hi i'm Week screen </Text>
    </View>
  );
};

export default Week;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
