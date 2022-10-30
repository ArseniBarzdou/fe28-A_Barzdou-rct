import { combineReducers } from '@reduxjs/toolkit';

import themeReducer from "./themeReducers";
import postsReducer from "./PostsReducer";

const reducer = combineReducers({
    themeReducer,
    postsReducer,
})

export default reducer;