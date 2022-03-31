import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { getWeek } from '../../utils/storage';
import { IDay, IWeek } from '../../utils/types';
import GlobalReducer, { IGlobalState } from './GlobalReducer';

interface IGlobalProvider {
  children: React.ReactNode;
}

const initialState: IGlobalState = {
  today: { id: '1', name: 'Saturday', subjects: [] },
  tomorrow: { id: '2', name: 'Sunday', subjects: [] },
  week: { days: [] },
  loading: false,
  setToday: () => {},
  setTomorrow: () => {},
  setWeek: () => {},
  setLoading: () => {},
  addDay: () => {},
  updateDay: () => {},
};

const GlobalContext = createContext(initialState);

export const GlobalProvider = ({
  children,
}: React.PropsWithChildren<IGlobalProvider>) => {
  const globalStateValue = useGlobalProvider();
  return (
    <GlobalContext.Provider value={globalStateValue}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalProvider = () => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const { today, tomorrow, week, loading } = state;

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const storedWeek = await getWeek();
        if (storedWeek) {
          setWeek(storedWeek);
        }
        //get current day of the stored week
        const currentDay = storedWeek.days.find(
          (day: IDay) => day.name === new Date().getDay().toString(),
        );
        if (currentDay) {
          setToday(currentDay);
        }

        //get tomorrow of the stored week
        const tomorrowDay = storedWeek.days.find(
          (day: IDay) => day.name === (new Date().getDay() + 1).toString(),
        );
        if (tomorrowDay) {
          setTomorrow(tomorrowDay);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const setToday = (x: IDay) => {
    dispatch({
      type: 'SET_TODAY',
      payload: x,
    });
  };

  const setTomorrow = (x: IDay) => {
    dispatch({
      type: 'SET_TOMORROW',
      payload: x,
    });
  };

  const setWeek = (x: IWeek) => {
    dispatch({
      type: 'SET_WEEK',
      payload: x,
    });
  };

  const addDay = (x: IDay) => {
    dispatch({
      type: 'ADD_DAY',
      payload: x,
    });
  };

  const updateDay = (x: IDay) => {
    dispatch({
      type: 'UPDATE_DAY',
      payload: x,
    });
  };

  const setLoading = (x: boolean) => {
    dispatch({
      type: 'SET_LOADING',
      payload: x,
    });
  };

  return {
    today,
    tomorrow,
    week,
    loading,
    setToday,
    setTomorrow,
    setWeek,
    setLoading,
    addDay,
    updateDay,
  };
};

export default function useGlobalContext() {
  const globalState = useContext(GlobalContext);
  return globalState;
}
