import React, {FC} from 'react';
// @ts-ignore
import styles from "./Button.module.css";
import {ButtonClassnamesType, ButtonType, ButtonPropsType} from './types'

const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
    [ButtonType.Primary]: styles.primary,
    [ButtonType.Secondary]: styles.secondary,
    [ButtonType.Error]: styles.error,
    [ButtonType.Gray]: styles.gray,
}

const Button: FC<ButtonPropsType> = ({title, onClick, className, type, disabled }) => {

    return <div onClick={onClick} className={`${styles.button} ${BUTTON_TYPE_CLASSNAMES[type]} ${disabled=true}${className || ''}`}>{title}</div>
}

export default Button