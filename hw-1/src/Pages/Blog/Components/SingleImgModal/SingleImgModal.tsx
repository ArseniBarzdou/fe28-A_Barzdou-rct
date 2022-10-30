import React from "react";
//@ts-ignore
import styles from "./SingleImgModal.module.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import postSelectors from "../../../../Redux/selectors/postSelectors";
// import {
// setSelectedImgPost,
// setSingleImgModalVisible
// } from "../../../../Redux/reducers/PostsReducer";
import Modal from "../../../../Components/Modal";

const SingleImgModal = () => {
const post = useSelector(postSelectors.getSelectedImgPost);

const isVisible = useSelector(postSelectors.getIsImgVisible);

const isImgModalVisible = useSelector(postSelectors.getIsImgVisible);

const dispatch = useDispatch();

const onClose = () => {
    // dispatch(setSingleImgModalVisible(!isVisible));
    // dispatch(setSelectedImgPost(null));
};

return post ? (
    <Modal
    active={isVisible}
    closeModal={onClose}
    isImgModalVisible={isImgModalVisible}
    >
    <img src={post.image} alt="img" />
    </Modal>
) : null;
};

export default SingleImgModal;