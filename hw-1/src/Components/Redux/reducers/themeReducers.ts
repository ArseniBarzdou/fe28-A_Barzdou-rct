import { createSlice } from '@reduxjs/toolkit';

// import { Theme } from '..'

const INITIAL_STATE = {
    // theme: isThrowStatement.Light,
}
const themeSlice = createSlice({
    name: 'theme',
    initialState: INITIAL_STATE,
    reducers: {
        changeTheme: (state,action) => {
            
        }
    },
})
