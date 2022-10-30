import React, {FC,ChangeEvent} from 'react'
//@ts-ignore
import styles from './Inputsign.module.css'

type InputPropsSign = {
    value: string, 
    onChange: (value:string)=>void, 
    placeholder?: string, 
    disabled?: boolean, 
    error?: boolean,
}

const inputSign: FC<InputPropsSign> = ({value, onChange, placeholder='', disabled, error}) => {

    const onInputChange = (evt:ChangeEvent<HTMLInputElement>)=>{
    onChange(evt.target.value)
}
    return(

        <input type="text" onChange={onInputChange} value={value} placeholder={placeholder} className={`${styles.input} ${ error ? styles.error : ''}`} disabled={disabled}/>
    )
}
export default inputSign;

