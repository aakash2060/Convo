import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    notificationType: null,
    numberOfNotifications: 0,
    notificationData: [],
    notificationTypes: ['friend', 'convoStart', 'message', 'keepup', 'highlight', 'special', 'reply']
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
    }
});

export const { } = notificationSlice.actions;
export default notificationSlice.reducer
