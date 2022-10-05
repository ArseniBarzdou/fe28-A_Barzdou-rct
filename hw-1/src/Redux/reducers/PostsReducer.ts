import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TabsNames } from "../..//Utils/globalTypes";
import Tabs from "../../Components/Tabs";

const INITIAL_STATE = {
  selectedPost: null,
  activeTab: TabsNames.All,
};

const postsReducer = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabsNames>) => {
      state.activeTab = action.payload;
    },
  },
});

export default postsReducer.reducer;

export const { setSelectedPost, setActiveTab } = postsReducer.actions;