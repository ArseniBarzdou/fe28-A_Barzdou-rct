import {createContext, useContext} from 'react';

export enum Theme {
    Light = 'light',
    Dark = 'dark',
}

const DEFAULT__VALUE = {
    theme: Theme.Light,
    onChangeTheme: () => {},
};

const ThemeContext = createContext(DEFAULT__VALUE);

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;