import React, { FC,useState } from "react";
// import { HamburgerMenu } from "react-hamburger-menu";
//@ts-ignore
import styles from "./Header.module.css";
import Username from "../Username";
import { MenuIcon,
        CancelIcon,
        SearchIcon
        } from "../../Assets/Icons";
import classNames from "classnames";
import Menu from "./Menu";

// import Menu from "../Burger/Burger";




const Header = ({onClick, input, isOpened}:any) => {


    
    return (
        <div className={classNames(styles.navbarMenu)}>
            <nav className={styles.nav}>
            <div className={styles.burgerButton} onClick={onClick}>
                {isOpened ? <CancelIcon /> : <MenuIcon />}
            </div>
            {input}
            <div className={styles.userSearchWrapper}>
                <div
                className={classNames(styles.sunMoonIcon)}
                
                >
                </div>
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