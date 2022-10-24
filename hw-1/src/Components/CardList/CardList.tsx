import React, { FC } from "react";
import classNames from "classnames";
//@ts-ignore
import styles from "./CardList.module.css";

import CardPost from "../CardPost";

import { CardListType } from "../../Utils/globalTypes";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardListProps = {
  cardList: CardListType;
};

const CardList: FC<CardListProps> = ({ cardList }) => {


  return cardList && cardList.length > 0 ? (
    <div
      className={classNames(styles.listWrapper)}
    >
      <div className={styles.leftSideList}>
        <div className={styles.largeCardListWrapper}>
          <CardPost post={cardList[0]} size={CardSize.Large} />
        </div>

        <div className={styles.mediumCardListWrapper}>
          {cardList.map((post, id) => {
            if (id >= 1 && id <= 4) {
              return (
                <CardPost post={post} key={post.id} size={CardSize.Medium} />
              );
            }
          })}
        </div>
      </div>
      <div className={styles.rightSideList}>
        {cardList.map((post, id) => {
          if (id >= 5) {
            return <CardPost post={post} key={post.id} size={CardSize.Small} />;
          }
        })}
      </div>
    </div>
  ) : null;
};

export default CardList;