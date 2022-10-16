import React, { FC } from "react";
// @ts-ignore
import styles from "./Post.module.css";
import classNames from "classnames";
import { LikeDownIcon, LikeUpIcon, Ellipsis, SavesIcon } from "../../Assets/Icons";
import { PostProps } from "./types";
import { useNavigate } from "react-router-dom";


const Post: FC<PostProps> = ({ post, }) => {
    const { image, text, title } = post;


    return (
    <>
        <div className={styles.textImgWrap}>
            <div className={styles.contentWrapper}>
            <div className={styles.titleWrapper}>
                <div className={styles.PostName}> Home <span>| Post14278</span> </div>
                <div className={styles.title}>{title}</div>
            </div>

            </div>
            <div className={styles.imgWrapper}>
            <img src={image} alt="img" />
            </div>
            <div>
                {text}
            </div>
        </div>
        <div className={styles.iconsWrapper}>
            <div className={styles.iconsThumb}>
            <LikeUpIcon />
            <LikeDownIcon />
            </div>
            <div className={styles.iconsOptions}>
            Add to Favorites
            </div>
        </div>
        
        <div>
            <div>
                <div>Prev</div>
                <div>10 Things to Know About Salvador Dalí </div>
            </div>
            <div>
                <div>Next</div>
                <div>8 Beautiful Villas Belonging to Artists You Need to See </div>
            </div>
        </div>
    </>
    );
};
export default Post;