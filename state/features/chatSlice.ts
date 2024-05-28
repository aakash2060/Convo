import { createSlice } from "@reduxjs/toolkit";
import { convoType } from "@/types";

const initialState:any = {
    convo: null,
}

const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
        getConvoForChat: (state, action) => {
            state.convo = action.payload;
        }
    }
})


export const { getConvoForChat } = chatSlice.actions;
export default chatSlice.reducer