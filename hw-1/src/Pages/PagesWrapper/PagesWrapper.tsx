import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// @ts-ignore
import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Blog from "../Blog";

import { Theme, useThemeContext } from "../../Context/Theme/Context";

import {PathNames }from "../Router/Router";
import postSelectors from "../../Redux/selectors/postSelectors";


const PagesWrapper = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };

  const { theme } = useThemeContext ();
  const [isOpened, setOpened] = useState(false);

  const location = useLocation();
  const modalVisible = useSelector(postSelectors.getIsModalVisible)
  const imgVisible = useSelector(postSelectors.getIsImgVisible)


  return (
    <>
    <div
      className={classNames(styles.app , {
        [styles.darkContainer]: theme === Theme.Dark,
        [styles.modalActive]: modalVisible || imgVisible,
      })}
    >
        <Header />

     {/* <Outlet/> */}
      {location.pathname === PathNames.Home ? <Blog/>:<Outlet/>}
      <Footer />
    </div>
    </>
  );
};
export default PagesWrapper;