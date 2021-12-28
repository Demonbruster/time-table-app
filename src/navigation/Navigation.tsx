import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

function SampleApp() {
  return (
    <View>
      <Text>Sample App</Text>
    </View>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <SampleApp />
    </NavigationContainer>
  );
}

export default Navigation;
