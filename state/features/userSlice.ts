import users from "@/assets/data/users";
import { createSlice } from "@reduxjs/toolkit";

const tabs = ['Convos', 'Private']
const initialState = {
    authenticatedUserData: users[0],
    userData: users[0],
    activeTab: tabs[0],
    tabs
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUserData: (state, action) => {
            state.userData = action.payload;
        },
        setActiveProfileTab: (state, action) => {
            state.activeTab = tabs[action.payload]
        }
    }
})

export const { getUserData, setActiveProfileTab } = userSlice.actions;
export default userSlice.reducer;
