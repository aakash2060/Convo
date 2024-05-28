import { createSlice } from "@reduxjs/toolkit";
import { useColorScheme } from "@/components/useColorScheme";

export type appearanceStateType = {
    name: string;
    primary: string;
    secondary: string;
    backgroundColor: string;
    textColor: string;
    backgroundTransparent: string;
    faint: string;
}
const lightMode = {
    name: 'light',
    primary: '#625FE0',
    secondary: '#393939',
    backgroundColor: 'white',
    textColor: '#393939',
    backgroundTransparent: 'rgba(255, 255, 255, 0.3)',
    faint: 'gray'
}

const darkMode = {
    name: 'dark',
    primary: '#625FE0',
    secondary: '#393939',
    backgroundColor: '#000000',
    textColor: 'white',
    backgroundTransparent: 'rgba(0, 0, 0, 0.4)',
    faint: '#292929',
}



const initialState = {
    currentMode: darkMode
}

const appearanceSlice = createSlice({
    name: 'appearance',
    initialState,
    reducers: {
        getDefaultAppearance: (state, action) => {
            if(action.payload === 'light') {
                state.currentMode = lightMode;
            } else state.currentMode = darkMode;
        },
        setAppearance: (state) => {
            if(state.currentMode.name === 'light') {
                state.currentMode = darkMode;
            } else state.currentMode = lightMode;
        },
    }
});


export const { setAppearance, getDefaultAppearance } = appearanceSlice.actions;
export default appearanceSlice.reducer;