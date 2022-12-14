import React, {FC, useState, useEffect} from "react";
import {Link} from 'react-router-dom'

// @ts-ignore
import styles from './SignUp.module.css';
import classNames from "classnames";
import Title from "../../Components/Title";
import Button, { ButtonType } from "../../Components/Button";
import Inputsign from "../../Components/Inputsign/Inputsign";
import Label from "../../Components/Label";

const validateMail = (email: string) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Signup = () => {

    const [name, setName] = useState('');

    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState("");
    const [mailTouch, setMailTouch] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordTouch, setPasswordTouch] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
   const [confirmPasswordError, setConfirmPasswordError] = useState('');
   const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
        setValue(inputValue);
        };

        useEffect(() => {
            if (mailTouch && !validateMail(mail)) {
            setMailError("Set correct email");
            } else {
            setMailError("");
            }
        }, [mailTouch, mail]);

        useEffect(() => {
            if (passwordTouch && password.length < 8) {
            setPasswordError("Enter more than 8 characters");
            } else {
            setPasswordError("");
            }
        }, [passwordTouch, password]);

        useEffect(() => {
            if (confirmPasswordTouched && confirmPassword.length < 8) {
                setConfirmPasswordError('Enter more than 8 characters');
            } else if (confirmPasswordTouched && confirmPassword != password) {
                setConfirmPasswordError(
                    'Confirm validation failed. Password does not match'
                );
            } else {
                setConfirmPasswordError('');
            }
        }, [confirmPasswordTouched, confirmPassword, password]);
    



    return (
            <div className={classNames(styles.container)}>
                <div className={styles.block__title}>
                    <div> Back to Home</div>
                    <Title title = {"Sign Up"}/>
                </div>
                <div className={classNames(styles.wrapper__place)} >
                    <div className={classNames(styles.wrapper__name)}>
                    <Label title={'Name'}/>
                        <div >
                            <Inputsign 
                                placeholder={"Your name"}
                                onChange={setName}
                                value={name}
                            />
                        </div>
                    </div>  
                    <div className={classNames(styles.wrapper__mail)}>
                    <Label title={'Email'}/>
                        <div >
                            <Inputsign 
                                placeholder={"Your email"}
                                onChange={setMail}
                                value={mail}
                                error={!!mailError}
                            />
                            {mailTouch && mailError && <div>{mailError}</div>}
                        </div>
                    </div>    
                    <div className={classNames(styles.wrapper__password)}>
                    <Label title={'Password'}/>
                        <Inputsign
                        placeholder={"Your password"}
                        onChange={setPassword}
                        value={password}
                        error={!!passwordError}
                        />
                        {passwordTouch && passwordError && <div className={classNames(styles.passwordError)} >{passwordError}</div>}
                    </div>
                    <div className={classNames(styles.wrapper__confpassword)}>
                    <Label title={'Confirm Password'}/>
                        <Inputsign
                        placeholder={'Confirm password'}
                        onChange={setConfirmPassword}
                        value={confirmPassword}
                        error={!!confirmPasswordError}
                        />
                        {confirmPasswordTouched && confirmPasswordError && (
                        <div>{confirmPasswordError}</div>)}
                    </div>
                    <div>
                        <Button
                            type={ButtonType.Primary}
                            title={"Sign In"}
                            onClick={() => {
                            console.log("primary");
                            }}
                            className={styles.signInBtn}
                            disabled={false}
                        />
                    </div>
                    <div className={styles.haveAccount}>
                        Already have an account? Sign In
                    </div>
                </div>
            </div>
        )
};

export default  Signup;
