import React, { FC, useState } from "react";
//@ts-ignore
import styles from "./Header.module.css";
import { render } from "react-dom";
import Username from "../Username";
import { MenuIcon, CancelIcon, SearchIcon} from "../../Assets/Icons";
import classNames from "classnames";
import Input from "../Input/Input";
import Popup from "reactjs-popup";
import Menu from "./Menu";




const Header = ({onClick, input, isOpened}:any) => {
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
            {isOpened &&  (
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




// import React from 'react';
// import styled from 'styled-components';

// const Ul = styled.ul`
//     list-style: none;
//     display: flex;
//     flex-flow: row nowrap;
//     li {
//     padding: 18px 10px;
//     }
//     @media (max-width: 768px) {
//         flex-flow: column nowrap;
//         background-color: #0D2538;
//         position: fixed;
//         transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
//         top: 0;
//         right: 0;
//         height: 100vh;
//         width: 300px;
//         padding-top: 3.5rem;
//         transition: transform 0.3s ease-in-out;
//         li {
//         color: #fff;
//         }
//     }
//     `;

//     const RightNav = ({ open }) => {
//     return (
//         <Ul open={open}>
//         <li>Home</li>
//         <li>About Us</li>
//         <li>Contact Us</li>
//         <li>Sign In</li>
//         <li>Sign Up</li>
//         </Ul>
//     )
//     }

// export default RightNav