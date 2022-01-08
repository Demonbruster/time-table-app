import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const Settings = (_props: Props) => {
  return (
    <View style={styles.root}>
      <Text style={{ color: 'black' }}>Hi im Setting screen</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
