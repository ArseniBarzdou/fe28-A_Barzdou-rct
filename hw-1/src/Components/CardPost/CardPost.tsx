import React, { FC } from "react";
// @ts-ignore
import styles from "./CardPost.module.css";
import { CardSize } from "../CardList/CardList";
import classNames from "classnames";
import { LikeDownIcon, LikeUpIcon, Ellipsis, SavesIcon } from "../../Assets/Icons";
import { CardPostProps } from "./types";
import { useDispatch } from "react-redux";
import {
    setFavouritePost,
    setLikeStatus
} from "../../Redux/reducers/PostsReducer";
import { LikeStatus } from "../../Utils/globalTypes";

const CardPost: FC<CardPostProps> = ({ post, size }) => {
    const { image, text, date, title, id, likeStatus } = post;
    const dispatch = useDispatch();

    const onAddFavorite = (event:any) =>{
        event.stopPropagation()
        dispatch(setFavouritePost(post))
    };

    const  onStatusClick = ( status: LikeStatus) =>{
        dispatch(setLikeStatus({status, id }));
    }

    return (
    <>
        <div
        className={classNames(styles.post, {
            [styles.largePost]: size === CardSize.Large,
            [styles.mediumPost]: size === CardSize.Medium,
            [styles.smallPost]: size === CardSize.Small,
        })}
        >
        <div className={styles.textImgWrap}>
            <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.date}>{date}</div>
                <div className={styles.title}>{title}</div>
            </div>
            {size === CardSize.Large && (
                <div className={styles.textWrapper}>{text}</div>
            )}
            </div>
            <div className={styles.imgWrapper}>
            <img src={image} alt="img" />
            </div>
        </div>
        <div className={styles.iconsWrapper}>
            <div className={styles.iconsThumb}>
            <div onClick={()=>onStatusClick(LikeStatus.Like)}><LikeUpIcon  />{likeStatus === LikeStatus.Like && 1}</div> 
            <div onClick={()=>onStatusClick(LikeStatus.Dislike)}><LikeDownIcon />{likeStatus === LikeStatus.Dislike && 1}</div>
            </div>
            <div className={styles.iconsOptions}>
            <div onClick ={onAddFavorite} className={styles.saveIcon}><SavesIcon /></div>
            <Ellipsis />
            </div>
        </div>
        </div>
    </>
    );
};
export default CardPost;