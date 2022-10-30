import React, {FC} from 'react';
// @ts-ignore
import styles from "./Button.module.css";
import {ButtonClassnamesType, ButtonType, ButtonPropsType} from './types'

const BUTTON_TYPE_CLASSNAMES: ButtonClassnamesType = {
    [ButtonType.Primary]: styles.primary,
    [ButtonType.Secondary]: styles.secondary,
    [ButtonType.Error]: styles.error,
    [ButtonType.ButtonIcon]: styles.ButtonIcon,
}

const Button: FC<ButtonPropsType> = ({
    title,
    onClick,
    className,
    disabled,
    type,
    iconBefore,
    iconAfter,
}) => {
    return (
    <button
        onClick={onClick}
        className={` ${className || ``} ${BUTTON_TYPE_CLASSNAMES[type]} `}
        disabled={disabled}
    >
        {iconBefore}
        {title}
        {iconAfter}
    </button>
    );
};
export default Button