import React, { FC, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
//@ts-ignore
import styles from './Menu.module.css';
import classNames from 'classnames';

import { MenuPropsType } from './types';
import Username from '../../Username';

import { PathNames } from '../../../Pages/Router/Router';

const Menu: FC<MenuPropsType> = ({ className }) => {
const location = useLocation();

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
        <NavLink
            to={PathNames.Home}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Home,
            })}
            >
            themme
        </NavLink>
        </li>
        <li>
        <NavLink to={PathNames.SignIn} className={styles.signIn}>
            SignIn
        </NavLink>
        </li>
    </ul>
);
};

export default Menu;


