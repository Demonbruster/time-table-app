/* eslint-disable react-native/no-inline-styles */
import {
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  Dimensions,
} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useGlobalStyles from '../styles/GlobalStyles';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const FloatingButton = (props: Props) => {
  const globalStyleColor = useGlobalStyles();
  return (
    <View style={[styles.root, props.containerStyle]}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onPress}>
        <View style={[styles.button, globalStyleColor.buttonContainer]}>
          <Text style={[styles.text]}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: 'absolute',
    top: height - width * 0.7,
    right: 20,
    padding: 10,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
});
