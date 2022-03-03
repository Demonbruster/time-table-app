import { View } from 'react-native';
import React from 'react';
import Text from '../../components/Text';
import useCardStyles from './CardStyle';

type Props = {
  title: string;
};

const Card = (props: Props) => {
  const styles = useCardStyles();
  return (
    <View style={styles.root}>
      <Text>{props.title}</Text>
    </View>
  );
};

export default Card;
