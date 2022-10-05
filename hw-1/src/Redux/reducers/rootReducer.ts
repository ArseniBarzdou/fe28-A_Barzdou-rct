import { combineReducers } from '@reduxjs/toolkit';
import postsReducer from "./PostsReducer";
const reducer = combineReducers({
    postsReducer
})

export default reducer;