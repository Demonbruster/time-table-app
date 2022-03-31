import { IDay, IWeek } from '../../utils/types';

export interface IGlobalState {
  today: IDay;
  tomorrow: IDay;
  week: IWeek;
  loading: boolean;
  setToday: (x: IDay) => void;
  setTomorrow: (x: IDay) => void;
  setWeek: (x: IWeek) => void;
  setLoading: (x: boolean) => void;
  addDay: (x: IDay) => void;
  updateDay: (x: IDay) => void;
}

export interface IGlobalAction {
  type:
    | 'SET_TODAY'
    | 'SET_TOMORROW'
    | 'SET_WEEK'
    | 'SET_LOADING'
    | 'ADD_DAY'
    | 'UPDATE_DAY';
  payload: any;
}

export default function GlobalReducer(
  state: IGlobalState,
  action: IGlobalAction,
) {
  switch (action.type) {
    case 'SET_TODAY': {
      return { ...state, today: action.payload };
    }
    case 'SET_TOMORROW': {
      return { ...state, tomorrow: action.payload };
    }
    case 'SET_WEEK': {
      return { ...state, week: action.payload };
    }
    case 'SET_LOADING': {
      return { ...state, loading: action.payload };
    }
    case 'ADD_DAY': {
      return {
        ...state,
        week: { ...state.week, days: [...state.week.days, action.payload] },
      };
    }
    case 'UPDATE_DAY': {
      const { id, ...rest } = action.payload;
      const days = state.week.days.map(day => {
        if (day.id === id) {
          return { ...day, ...rest };
        }
        return day;
      });
      return { ...state, week: { ...state.week, days } };
    }
    default:
      return state;
  }
}
