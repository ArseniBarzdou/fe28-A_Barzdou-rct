import React, { FC } from "react";
// @ts-ignore

// import styles from "./SinglePostModal";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import CardPost from "../../../../Components/CardPost";
import  { CardSize } from "../../../../Components/CardList/CardList"
import Modal from "../../../../Components/Modal";

// import { setSelectedPost, setSinglePostModalVisible } from "../../../../Redux/reducers/PostsReducer";
import postSelectors from "../../../../Redux/selectors/postSelectors";


const SinglePostModal = () => {
    const post = useSelector(postSelectors.getSelectedPost);

    const isVisible = useSelector(postSelectors.getSelectedPost);

    const ispostModalVisible = useSelector(postSelectors.getIsModalVisible);
    const dispatch = useDispatch();

    const onClose = () => {
        // dispatch(setSinglePostModalVisible(!isVisible));
        // dispatch(setSelectedPost(null));
    };

    return post ? (
        <Modal 
        active={isVisible}
        closeModal={onClose}
        ispostModalVisible={ispostModalVisible}
        >
        <CardPost size={CardSize.Large} post={post}/>
        </Modal>
    ):null
}

export default SinglePostModal;
