import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from "../Blog";
import PagesWrapper from "../PostCont/PagesWrapper";
import SignIn from "../SignIn";
import SignUp from "../SignUp";






export enum PathNames{
    Home = '/',
    SignIn='/sign-in',
    SignUp='/sign-up',

}


const Router = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path={PathNames.Home} element={<PagesWrapper />}>
            <Route path={PathNames.SignIn} element={<SignIn />} />
            <Route path={PathNames.SignUp} element={<SignUp />} />

            </Route>
            <Route path={'*'} element={<Navigate to={PathNames.SignIn}/>} />

        </Routes>
        </BrowserRouter>
    );
};
export default Router;