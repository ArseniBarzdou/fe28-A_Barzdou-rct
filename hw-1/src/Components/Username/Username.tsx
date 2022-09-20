import React from 'react';
// @ts-ignore
import styles from "./Username.module.css";

const Username = ({userName }: any) => {


    return (
    <div className={styles.username}>
        <p>{userName}</p>

    </div>
    );
};

export default Username