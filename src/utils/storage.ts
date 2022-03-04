import AsyncStorage from '@react-native-async-storage/async-storage';
import { IWeek } from './types';

export const storeWeek = async (week: IWeek) => {
  return await AsyncStorage.setItem('week', JSON.stringify(week));
};

export const getWeek = async () => {
  try {
    const week = await AsyncStorage.getItem('week');
    return week ? JSON.parse(week) : null;
  } catch (error) {}
};
