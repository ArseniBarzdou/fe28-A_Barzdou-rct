import React, {FC, useState, useEffect} from "react";
import {Link} from 'react-router-dom';

// @ts-ignore
import styles from './SignIn.module.css'
import classNames from "classnames";
import Title from "../../Components/Title";
import Button, { ButtonType } from "../../Components/Button";
import Inputsign from "../../Components/Inputsign/Inputsign";
import Label from "../../Components/Label";
import { PathNames } from "../Router/Router";


const validateMail = (email: string) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Signin = () => {
    const [mail, setMail] = useState("");
    const [mailError, setMailError] = useState("");
    const [mailTouch, setMailTouch] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordTouch, setPasswordTouch] = useState(false);


    const [value, setValue] = useState<string>("");
    const onChange = (inputValue: string) => {
    setValue(inputValue);
    };

    const onChangeMail = (value: string) => {
        setMail(value);
        setMailTouch(true);
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


    return (
        <div className={classNames(styles.container)}>
            <div className={styles.block__title}>
                <div> Back to Home</div>
                <Title title = {"Sign In"}/>
            </div>
            <div className={classNames(styles.wrapper__place)} >
                <Label title={'Email'} />
                    <div>
                        <Inputsign 
                            placeholder={"Your email"}
                            onChange={setMail}
                            value={mail}
                            error={!!mailError}
                        />
                        {mailTouch && mailError && <div>{mailError}</div>}
                    </div>
                <div>
                <Label title={'Password'} />
                    <Inputsign
                    placeholder={"Your password"}
                    onChange={setPassword}
                    value={password}
                    error={!!passwordError}
                    />
                    {passwordTouch && passwordError && <div className={classNames(styles.passwordError)} >{passwordError}</div>}
                    <div className={classNames(styles.forgotPassword)}>Forgot password?</div>
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
                    Don’t have an account?<p>SignIn</p>
                </div>
            </div>
        </div>
    )
};

export default  Signin;
