import React, {FC} from 'react';
// @ts-ignore
import styles from "./Username.module.css";
import { UserNamePropsType } from './types';

const Username: FC<UserNamePropsType> = ({ userName, className }) => {


    return (
    <div className={`${styles.username} ${className || '' }`}>
        <p>{userName}</p>

    </div>
    );
};

export default Username