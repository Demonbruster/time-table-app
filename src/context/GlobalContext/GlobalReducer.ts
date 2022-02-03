export interface ISubjects {
  id: string;
  title: string;
  timePeriod: string;
  startTime: string;
  endTime: string;
  description?: string;
  note?: string;
  day: string;
}

export interface IGlobalState {
  today: ISubjects[];
  tomorrow: ISubjects[];
  week: ISubjects[];
  setToday: (x: ISubjects[]) => void;
  setTomorrow: (x: ISubjects[]) => void;
  setWeek: (x: ISubjects[]) => void;
}

export interface IGlobalAction {
  type: 'SET_TODAY' | 'SET_TOMORROW' | 'SET_WEEK';
  payload: ISubjects[];
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
    default:
      return state;
  }
}
