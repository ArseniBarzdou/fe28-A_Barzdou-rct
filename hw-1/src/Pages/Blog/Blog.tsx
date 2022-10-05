import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore

import Tabs from "../../Components/Tabs";
import { TabsNames } from "../../Utils/globalTypes";
import CardList from "../../Components/CardList/CardList";
import Title from "../../Components/Title";
import { setActiveTab } from "../../Redux/reducers/PostsReducer";
import PostsSelectors from "../../Redux/selectors/postSelectors"




const Blog = () => {
    const activeTab = useSelector(PostsSelectors.getActiveTab);
    const dispatch = useDispatch ();
    const onTabClick = (id: TabsNames) => {
        dispatch(setActiveTab)
    }
    return (
        <div>
            <Title title={"Blog"}/>
            {/* <Tabs tabs={TABS_NAME} onClick={onTabClick} activeTab={activeTab}/> */}
            <CardList/>
        </div>
    )


};

export default Blog;
