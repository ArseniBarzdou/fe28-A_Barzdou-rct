import React, { useState, useEffect } from "react"
// @ts-ignore

import styles from "./SearchList.module.css";
import classNames from "classnames";
import CardSearchPost from "../CardSearchPost";
import { CardSearchType } from "../CardSearchPost/Types";

type SearchList = Array<CardSearchType>;


const SearchList = () => {

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
        const [searchList, setSearchList] = useState<SearchList | null>([]);

        const searchElement = "‘Astronauts’";
    
        useEffect(() => {
        setSearchList(POST_MOCK);
        }, []);
    
        return searchList && searchList.length > 0 ? (
        <div className={classNames(styles.searchListWrapper)}>
            <div className={classNames(styles.searchListTitle)}>
            Search results {searchElement}
            </div>
            <div className={classNames(styles.searchListCardWrapper)}>
            {searchList.map((post, id) => {
                return <CardSearchPost post={post} key={post.id} />;
            })}
            </div>
        </div>
        ) : null;
        

}

export default SearchList;