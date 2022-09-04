import React, {FC} from "react";
// @ts-ignore
import styles from "./Title.module.css";
import {TitleClassnamesType, TitleType, TitlePropsType} from './types'


const TITLE_TYPE_CLASSNAMES: TitleClassnamesType = {
    [TitleType.Signin]: styles.primary,
}



const Title: FC<TitlePropsType> = ({title, onClick, className, type, disabled }) => {

    return <div onClick={onClick} className={`${styles.button} ${TITLE_TYPE_CLASSNAMES[type]} ${className || ''} ${disabled ?styles.disabled: ''}`}>{title}</div>
}

// const Title = ({title, className }: any) => {
//     return (
//         <div className=
//     )
// }

export default Title