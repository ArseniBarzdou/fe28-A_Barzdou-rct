import React from 'react';
// @ts-ignore
import styles from "./Username.module.css";

const Username = ({title, onClick, className }: any) => {


    return <div onClick={onClick} className={`${styles.username}  ${className || ''}`}>{title}</div>
}

export default Username