import React, { FC, useState } from "react";
//@ts-ignore
import styles from "./Header.module.css";
import Username from "../Username";
import { MenuIcon, CancelIcon, SearchIcon} from "../../Assets/Icons";
import classNames from "classnames";
import Input from "../Input/Input"
// import Menu from "./Menu";

import Menu from "../Burger/Burger";




const Header = ({onClick, isOpened}:any) => {
    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };
    const [, setOpened] = useState(true);


    
    return (
        
        <div className={classNames(styles.navbarMenu)}>
            <nav className={styles.nav}>
            <div className={styles.burgerButton} onClick={() => setOpened(!isOpened)}>
                {isOpened ? <CancelIcon /> : <MenuIcon />}
            </div>
            
            {isOpened ? null :  (
            <Input
                placeholder={"Search..."}
                onChange={onChange}
                value={value}
                />
                )}
            <div className={styles.userSearchWrapper}>
                <div
                className={styles.searchIcon}>
                <SearchIcon />

                </div>
                <Username userName={"Artem Malkin"} />
            </div>
            </nav>
            {/* {isOpened && <Menu />} */}
        </div>
        );
    };


export default Header;