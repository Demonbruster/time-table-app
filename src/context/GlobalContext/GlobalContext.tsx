import React, { createContext, useContext, useReducer } from 'react';
import GlobalReducer, { IGlobalState, ISubjects } from './GlobalReducer';

interface IGlobalProvider {
  children: React.ReactNode;
}

const initialState: IGlobalState = {
  today: [],
  tomorrow: [],
  week: [],
  setToday: () => {},
  setTomorrow: () => {},
  setWeek: () => {},
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

  const { today, tomorrow, week } = state;

  const setToday = (x: ISubjects[]) => {
    dispatch({
      type: 'SET_TODAY',
      payload: x,
    });
  };

  const setTomorrow = (x: ISubjects[]) => {
    dispatch({
      type: 'SET_TOMORROW',
      payload: x,
    });
  };

  const setWeek = (x: ISubjects[]) => {
    dispatch({
      type: 'SET_WEEK',
      payload: x,
    });
  };

  return { today, tomorrow, week, setToday, setTomorrow, setWeek };
};

export default function useGlobalContext() {
  const globalState = useContext(GlobalContext);
  return globalState;
}
