import React, { FC, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import styles from './Menu.module.css';
import classNames from 'classnames';
import { PathNames } from '../../../Pages/Router/Router';

import { useThemeContext, Theme } from "../../../Context/Theme/Context";

import { MenuPropsType } from './types';
import Username from '../../Username';
import Button from '../../Button';
import { ButtonType } from "../../Button/types";

import {
    LightIcon,
    DarkIcon,
} from '../../../../src/Assets/Icons';


const Menu: FC<MenuPropsType> = ({ className }) => {
const location = useLocation();
const { theme, onChangeTheme } = useThemeContext();
const dispatch = useDispatch();


const [fix, setFix] = useState(false);

function setFixed() {
    if (window.scrollY >= 84) {
        setFix(true)
    } else {
        setFix(false)
    }
}
    window.addEventListener("scroll",setFixed)

return (
    <ul
        className={classNames(fix ? styles.listMenufixed:styles.listMenu)}
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
        <li>
            <NavLink
            to={PathNames.Home}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Home,
            })}
            >
            Content
            </NavLink>
        </li>
        <li>
            <NavLink
            to={PathNames.Search}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Search,
            })}
            >
            Search
            </NavLink>
        </li>
        <li >
        <NavLink
            to={PathNames.Home}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Home,
            })}
            >
            Add post
        </NavLink>
        </li>
        <li className={classNames(styles.menu__iconTheme)}>
            <div className={styles.listMenu__Item__Theme}>
                <Button
                    type={ButtonType.ButtonIcon}
                    title={null}
                    onClick={onChangeTheme}
                    className={styles.iconsLightButton}
                    iconBefore={
                    <LightIcon ></LightIcon>
                    }
                    iconAfter={null}
                    disabled={theme === Theme.Light ? true : undefined}
                ></Button>
                </div>
                <div className={styles.listMenu__item__whiteButton}>
                <Button
                    type={ButtonType.ButtonIcon}
                    title={null}
                    onClick={onChangeTheme}
                    className={styles.iconsDarkButton}
                    iconBefore={
                    <DarkIcon width={`24`} height={`24`}></DarkIcon>
                    }
                    iconAfter={null}
                    disabled={theme === Theme.Dark ? true : undefined}
                ></Button>
            </div>
        </li>
        <li>
        <NavLink to={PathNames.SignIn} className={styles.signIn}>
            Sign In
        </NavLink>
        </li>
    </ul>
);
};

export default Menu;


