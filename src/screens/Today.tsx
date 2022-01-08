import React from 'react';
import { Text, SafeAreaView } from 'react-native';

interface Props {}

const Today = (_props: Props) => {
  return (
    <SafeAreaView>
      <Text style={{ color: 'black' }}>I'm Today Screen</Text>
    </SafeAreaView>
  );
};

export default Today;
