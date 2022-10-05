import React, {FC, useState} from 'react';
// import { Provider } from "react-redux";

// @ts-ignore
import styles from './App.module.css';
import classNames from "classnames";
import Button, {ButtonType} from "./Components/Button";
import Username from "./Components/Username";
import Title from "./Components/Title";
import Tabs  from "./Components/Tabs";
import Header from "./Components/Header";
import Input from "./Components/Input/Input";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList/CardList";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';

import store from './Redux/store';





export const App = () => {
    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };
    // const [isOpened, setOpened] = useState(true);

    return (
        <div className={styles.app}>
            <Header/>
            {/* <Blog/> */}
            {/* <Tabs/> */}
            {/* <Title title={"Blog"} /> */}
            {/* <SignIn/> */}
            <SignUp/>
            {/* <CardList/> */}
            <Footer/>
        </div>
            
        
    );
}
export default App;
