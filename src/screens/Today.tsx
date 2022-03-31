import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import FloatingButton from '../components/FloatingButton';
import Card from '../container/Card/Card';

const sampleData = [
  {
    key: '1',
    title: 'Red',
  },
  {
    key: '2',
    title: 'Blue',
  },
  {
    key: '3',
    title: 'Green',
  },
  {
    key: '4',
    title: 'Yellow',
  },
  {
    key: '5',
    title: 'Purple',
  },
  {
    key: '6',
    title: 'Orange',
  },
];

interface Props {
  navigation: any;
}

const Today = (_props: Props) => {
  const handlePress = () => {
    _props.navigation.navigate('DayScreen');
  };

  return (
    <SafeAreaView>
      <FloatingButton onPress={handlePress} />
      <FlatList
        data={sampleData}
        keyExtractor={item => item.key}
        renderItem={({ item }) => <Card title={item.title} />}
      />
    </SafeAreaView>
  );
};

export default Today;
