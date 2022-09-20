import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
//@ts-ignore
import styles from "./Menu.module.scss";

import Username from "../../Username/Username";
import { DarkIcon, LightIcon } from "../../../Assets/Icons";
import classNames from "classnames";
import Button, { ButtonType } from "../../Button";

const Menu = () => {
    const location = useLocation()

    return(
        <ul className={classNames(styles.listMenu, )}>
        <li>
            <Username userName={"Artem MAlkin"}/>
        </li>
        <li>
            Home
        </li>
        <li>
            Add Post
        </li>
        
        <li>

        </li>
        
    </ul>
    )
}

export default Menu