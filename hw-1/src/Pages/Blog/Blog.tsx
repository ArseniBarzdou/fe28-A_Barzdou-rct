import React from "react";
import { useSelector } from "react-redux";

// @ts-ignore

import classNames from 'classnames';
import Tabs from "../../Components/Tabs";
import CardList from "../../Components/CardList/CardList";
import Title from "../../Components/Title";

const Blog = () => {
    const TABS_NAME = [
        { key: "all",tabTitle: "All" },
        { key: "mf",tabTitle: "My Favorite"},
        { key: "p",tabTitle: "Popular"},
    ];

    return (
        <div>
            <Title title={"Blog"}/>
            <Tabs/>
            <CardList/>
        </div>
    )


};

export default Blog;
