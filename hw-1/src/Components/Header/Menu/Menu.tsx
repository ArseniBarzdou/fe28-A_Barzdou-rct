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
            to={PathNames.Home}
            className={classNames({
                [styles.activeLink]: location.pathname === PathNames.Home,
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
        <li>
        <NavLink to={PathNames.SignIn} className={styles.signIn}>
            SignIn
        </NavLink>
        </li>
    </ul>
);
};

export default Menu;



// import React from "react";
// import { useLocation } from "react-router-dom";

// //@ts-ignore
// import styles from "./Menu.module.css";
// import classNames from "classnames";
// import { NavLink } from "react-router-dom";
// import { PathNames } from "../../../Pages/Router/Router";
// import { MenuPropsType } from './types';


// import Username from "../../Username/Username";

// const Menu = () => {
// const location = useLocation();

// const MENU_LINK = [
//     {
//     key: "Home",
//     title: "Home",
//     path: PathNames.Home,
//     },
//     {
//     key: "Search",
//     title: "Search",
//     path: PathNames.Home,

//     },
//     {
//     key: "Add post",
//     title: 'Add post',
//     path: PathNames.Home,

//     }
// ];

// return (
//     <ul
//     className={classNames(styles.listMenu)}
//     >
//     <li>
//         <Username userName={"Artem Malkin"} />
//     </li>
//     {MENU_LINK.map(({ key, title, path }) => {
//         return (
//         <li key={key}>
//             <NavLink
//             to={path}
//             className={classNames({
//                 [styles.activeLink]: location.pathname === path,
//                 [styles.inactiveLink]: location.pathname !== path
//             })}
//             >
//             {title}
//             </NavLink>
//         </li>
//         );
//     })}
//     <li>
//         <NavLink to={PathNames.SignIn} className={styles.signIn}>
//         SignIn
//         </NavLink>
//     </li>
//     </ul>
// );
// };
// export default Menu;
// import React, { FC } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// //@ts-ignore
// import styles from "./Menu.module.scss";

// import Username from "../../Username/Username";
// import { DarkIcon, LightIcon } from "../../../Assets/Icons";
// import classNames from "classnames";
// import Button, { ButtonType } from "../../Button";
// import { PathNames } from "../../../Pages/Router/Router";
// import { MenuPropsType } from './types';


// const Menu: FC<MenuPropsType> = ({ className }) => {
//     const location = useLocation()

//     return(
//         <ul
//             className={classNames(styles.listMenu)}
//         >
//             <li>
//             <Username userName={'Artem Malkin'} />
//             </li>
//             <li>
//             <NavLink
//                 to={PathNames.Home}
//                 className={classNames({
//                 [styles.activeLink]: location.pathname === PathNames.Home,
//                 })}
//             >
//                 Home
//             </NavLink>
//             </li>
//             <li>Add post</li>
//         </ul>
//         );
// };


// export default Menu