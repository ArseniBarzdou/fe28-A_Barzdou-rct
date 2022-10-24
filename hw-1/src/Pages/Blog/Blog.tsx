import React, { FC, useEffect } from "react";

// @ts-ignore
import classnames from "classnames";

import Title from "../../Components/Title";

import CardList from "../../Components/CardList/CardList"

// import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { useDispatch, useSelector } from "react-redux";
import {
    getPosts,
    setActiveTab,
    setCardsList,
} from "../../Redux/reducers/PostsReducer";
import PostsSelectors from "../../Redux/selectors/postSelectors";
import Tabs from "../../Components/Tabs";
import { TabsNames } from "../../Utils/globalTypes";
import SinglePostModal from "./Components/SinglePostModal";
import PostModalImg from "./Components/SinglePostModal";

const POST_MOCK = [
    {
        id: 1,
        image:
        "https://cdn.pixabay.com/photo/2011/12/13/14/30/earth-11014_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 2,
        image:
        "https://cdn.pixabay.com/photo/2012/10/10/11/05/space-station-60615_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 3,
        image:
        "https://cdn.pixabay.com/photo/2011/12/13/17/09/astronaut-11050_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 4,
        image:
        "https://cdn.pixabay.com/photo/2013/03/02/02/20/space-89130_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 5,
        image:
        "https://cdn.pixabay.com/photo/2018/03/29/19/34/northern-lights-3273425_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 6,
        image:
        "https://cdn.pixabay.com/photo/2011/12/13/14/30/earth-11014_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 7,
        image:
        "https://cdn.pixabay.com/photo/2018/03/29/19/34/northern-lights-3273425_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 8,
        image:
        "https://cdn.pixabay.com/photo/2013/03/02/02/20/space-89130_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 9,
        image:
        "https://cdn.pixabay.com/photo/2018/03/29/19/34/northern-lights-3273425_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 10,
        image:
        "https://cdn.pixabay.com/photo/2011/12/13/17/09/astronaut-11050_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
            "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    {
        id: 11,
        image:
        "https://cdn.pixabay.com/photo/2012/10/10/11/05/space-station-60615_960_720.jpg",
        text: "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
        date: "April 20, 2021",
        lesson_num: 0,
        title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...",
        author: 0
    },
    
    ];

const TABS_NAME = [
    {
        key: TabsNames.All,
        title: "All",
        //   disabled: true,
    },
    {
        key: TabsNames.Favorites,
        title: "My favorites",
        //   disabled: true,
    },
    {
        key: TabsNames.Popular,
        title: "Popular",
        //   disabled: true,
    },
];

const Blog = () => {
//   const { theme, onChangeTheme } = useThemeContext();
//   const isDarkTheme = theme === Theme.Dark;
    const cardsList = useSelector(PostsSelectors.getCardsList);
    const dispatch = useDispatch();
    const activeTab = useSelector(PostsSelectors.getActiveTab);
    const onTabClick = (id: TabsNames) => {
        dispatch(setActiveTab(id));
    };
    useEffect(() => {
        // dispatch(setCardsList(POST_MOCK));
        dispatch(getPosts());
    }, []);

    return (
        <div>
        <PostModalImg></PostModalImg>
        <SinglePostModal></SinglePostModal>
        <div>
            <div>
            <Title title={"Blog"}></Title>
            </div>
            <div>
            <Tabs
                tabs={TABS_NAME}
                onClick={onTabClick}
                activeTab={activeTab}
            ></Tabs>
            </div>
            <div>
            <CardList cardList={cardsList}></CardList>
            </div>
        </div>
        </div>
    );
};

export default Blog;