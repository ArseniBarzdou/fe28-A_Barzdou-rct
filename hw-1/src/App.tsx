import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from "react-redux";

// @ts-ignore
import styles from './App.module.css';
import classNames from "classnames";

import { changeTheme } from "./Redux/reducers/themeReducers";
import { ThemeProvider } from "./Context/Theme/Provider";
import ThemeSelectors from "./Redux/selectors/themeSelectors";

import Router from "./Pages/Router";
import store from './Redux/store';

const App = () => {
    
    const theme = useSelector(ThemeSelectors.getTheme);

    const dispatch = useDispatch();

    const onChangeTheme = () => {
        dispatch(changeTheme());
    };

    return (
        <ThemeProvider theme={theme} onChangeTheme={onChangeTheme}>
            <Router/>
        </ThemeProvider>
    );
};

const AppWithStore = () => {
    return (
    <Provider store={store}>
        <App />
    </Provider>
    );
};

export default AppWithStore;


