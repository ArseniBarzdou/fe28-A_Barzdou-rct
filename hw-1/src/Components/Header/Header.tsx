
import React, { useState, useEffect  } from 'react';
//@ts-ignore
import styles from './Header.module.css';
import classNames from 'classnames';
import Username from '../Username';
import Menu from './Menu';
import Input from "../Input/Input";

import {
    SearchIcon,
    LightIcon,
    DarkIcon,
    MenuIcon,
    CancelIcon,
    // UserIcon,
} from '../../../src/Assets/Icons';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PathNames } from '../../Pages/Router/Router';

const Header = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
        setValue(inputValue);
    };
    const [isOpenedMenu, setOpenedMenu] = useState(false);
    const [isOpenedSearchInput, setOpenedSearchInput] = useState(true);


    


    const navigate = useNavigate();

    const onSignInClick = () => {
      navigate(PathNames.SignIn);
    };

return (
    <div className={classNames(styles.header)}>
        <nav className={styles.nav}>
            <div className={styles.burgerButton} onClick={() => setOpenedMenu(!isOpenedMenu)}>
            {isOpenedMenu ? <CancelIcon /> : <MenuIcon />}
            </div>
            {isOpenedSearchInput ? null : (
        <Input
        placeholder={"Search..."}
        onChange={onChange}
        value={value}
        />
    )}
    <div className={styles.userSearchWrapper}>
            <div
        className={styles.searchIcon}
        onClick={() => setOpenedSearchInput(!isOpenedSearchInput)}
    >
        <SearchIcon
        width={`24`}
        height={`24`}
        ></SearchIcon>
    </div>
    <div className={styles.header__user}>
    <Username userName={"Artem Malkin"} />
        <div className={styles.header__user__noIcon} onClick={onSignInClick}>
            {/* <UserIcon/> */}
        </div>
        
    </div>
    </div>
    {isOpenedMenu && <Menu />}
    </nav>
    </div>
);
};

export default Header;
