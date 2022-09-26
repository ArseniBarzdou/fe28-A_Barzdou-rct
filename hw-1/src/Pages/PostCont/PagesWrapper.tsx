import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

// @ts-ignore
import styles from "./PagesWrapper.module.css";
import classNames from "classnames";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input/Input";
import Blog from "../Blog";
import {PathNames }from "../Router/Router";


const PagesWrapper = () => {
  const [value, setValue] = useState<string>("");

  const onChange = (inputValue: string) => {
    setValue(inputValue);
  };
  const [isOpened, setOpened] = useState(false);

  const location = useLocation();


  return (
    <div
      className={classNames(styles.app)}
    >
      <Header
        onClick={() => setOpened(!isOpened)}
        isOpened={isOpened}
        input={
          isOpened && (
            <Input
              placeholder={"Placeholder"}
              onChange={onChange}
              value={value}
            />
          )
        }
      />
     {/* <Outlet/> */}
      {location.pathname === PathNames.Home ? <Blog/>:<Outlet/>}
      <Footer />
    </div>
  );
};
export default PagesWrapper;