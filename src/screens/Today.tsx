import React from 'react';
import { SafeAreaView } from 'react-native';
import Text from '../components/Text';

interface Props {}

const Today = (_props: Props) => {
  return (
    <SafeAreaView>
      <Text>I'm Today Screen</Text>
    </SafeAreaView>
  );
};

export default Today;
