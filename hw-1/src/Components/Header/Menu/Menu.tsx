import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
//@ts-ignore
import styles from "./Menu.module.scss";

import Username from "../../Username/Username";
import { DarkIcon, LightIcon } from "../../../Assets/Icons";
import classNames from "classnames";
import Button, { ButtonType } from "../../Button";
import { PathNames } from "../../../Pages/Router/Router";
import { MenuPropsType } from './types';


const Menu: FC<MenuPropsType> = ({ className }) => {
    const location = useLocation()

    return(
        <ul
            className={classNames(styles.listMenu)}
        >
            <li>
            <Username userName={'Artem Malkin'} />
            </li>
            <li>
            <NavLink
                to={PathNames.Home}
                className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Home,
                })}
            >
                Home
            </NavLink>
            </li>
            <li>Add post</li>
        </ul>
        );
};


export default Menu