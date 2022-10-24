import React from "react";
import { useSelector } from "react-redux";
import postSelectors from "../../Redux/selectors/postSelectors";
// @ts-ignore

import styles from "./Modal.module.css";
import { CancelIcon } from "../../Assets/Icons";
import classNames from "classnames";

const Modal = ({ active, closeModal, children, ispostModalVisible, isImgModalVisible }: any ) => {
    return (

        <div className={classNames(styles.modalPost, {
                [styles.modalActive]: active,
            })}
        >
        <div className={styles.cancelButton} onClick={closeModal}><CancelIcon/></div>
        <div className={classNames({
            [styles.modalContent]: ispostModalVisible,
            [styles.modalContentImg]: isImgModalVisible,
        })}> {children}</div>
        </div>
    );
}


export default Modal;