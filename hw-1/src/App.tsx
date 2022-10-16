import React, {FC, useState} from 'react';
import useLocalStorage from 'use-local-storage'
import { Provider, useDispatch, useSelector } from "react-redux";

// @ts-ignore
import styles from './App.module.css';
import classNames from "classnames";
import Button, {ButtonType} from "./Components/Button";
import Username from "./Components/Username";
import Title from "./Components/Title";
import Tabs  from "./Components/Tabs";
import Header from "./Components/Header";
import Input from "./Components/Input/Input";
import { useTheme } from './Context/Theme/Theme';
import Footer from "./Components/Footer";
import CardList from "./Components/CardList/CardList";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';
import Post from './Components/Post/Post';
import Router from "./Pages/Router";
import Menu from "./Components/Header/Menu/Menu";
import SearchList from './Components/SearchList';

import store from './Redux/store';





export const App = () => {
    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };

    const { theme } = useTheme();
    const [isOpened, setOpened] = useState(true);

    
    return (
        <div className={styles.app} 
            style={{
            ...theme
            } as React.CSSProperties}>
            <Header/>
            {/* <Blog/> */}
            <Tabs/>
            {/* <Menu/> */}
            {/* <Title title={"Blog"} /> */}
            {/* <SignIn/> */}
            {/* <Post/> */}
            {/* <SignUp/> */}
            <SearchList/>
            {/* <CardList/> */}
            <Footer/>
        </div>
            
        
    );
}
export default App;
