import React, { FC, useState, useEffect } from "react";
// @ts-ignore
import styles from "./CardSearchPost.module.css";
import classNames from "classnames";
import { LikeDownIcon, LikeUpIcon, Ellipsis, SavesIcon } from "../../Assets/Icons";

import { CardSearchProps } from "./Types";


const CardSearchPost: FC<CardSearchProps> = ({ post }) => {
    const { image, date, title } = post;

    return (
        <div className={classNames(styles.cardWrapper)}>
            <div className={classNames(styles.cardHeaderWrapper)}>
                <div className={classNames(styles.imgWrapper)}>
                    <img src={image} alt='img' />
                </div>
                <div className={classNames(styles.textWrapper)}>
                    <div className={styles.date}>{date}</div>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
            <div className={styles.iconsWrapper}>
                <div className={styles.iconsThumb}>
                <LikeUpIcon />
                <LikeDownIcon />
                </div>
                <div className={styles.iconsOptions}>
                <SavesIcon />
                <Ellipsis />
            </div>
        </div>
        </div>
        );
    };
    export default CardSearchPost;
