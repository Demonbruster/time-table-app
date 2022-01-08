export interface IThemeStates {
  isDark: boolean;
  setTheme: (x: boolean) => void;
}

export interface IThemeAction {
  type: 'SET_THEME';
  payload: boolean;
}

export default function ThemeReducer(
  state: IThemeStates,
  action: IThemeAction,
) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, isDark: action.payload };

    default:
      return state;
  }
}
