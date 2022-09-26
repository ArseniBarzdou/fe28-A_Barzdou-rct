import React, {FC, useState} from 'react';
import { Provider } from "react-redux";

// @ts-ignore
import styles from './App.module.css';
import classNames from "classnames";
import Button, {ButtonType} from "./Components/Button";
import Username from "./Components/Username";
import Title, {TitleType} from "./Components/Title";
import Tabs from "./Components/Tabs";
import Menu from "./Components/Burger";
import Header from "./Components/Header";
import Input from "./Components/Input/Input";
import Footer from "./Components/Footer";
import CardList from "./Components/CardList/CardList";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Blog from './Pages/Blog';

import store from './Components/Redux/store';





export const App = () => {
    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };
    const [isOpened, setOpened] = useState(true);

    return (
        <div className={styles.app}>
            <Header  
            onClick={() => setOpened(!isOpened)}
        title={isOpened ? "x" : "="}
        input={
            isOpened ? null : (
            <Input
                placeholder={"Search..."}
                onChange={onChange}
                value={value}
            />
        )
        }
        />
        {/* {isOpened && <Menu/>} */}
        
            {/* <div className="button-type">
            <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} />
            <Button type={ButtonType.Primary} title={'Primary'} onClick={() => alert('Primary')} disabled/>
            <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} />
            <Button type={ButtonType.Secondary} title={'Secondary'} onClick={() => alert('Secondary')} disabled/>
            <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} />
            <Button type={ButtonType.Error} title={'Error'} onClick={() => alert('Error')} disabled/>
            </div> */}
            <Blog/>
            {/* <Tabs/> */}
            {/* <Title title={"Blog"} /> */}
            {/* <SignIn/>
            <SignUp/> */}
            {/* <CardList></CardList> */}
            <Footer/>
        </div>
            
        
    );
}
export default App;
