import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    file: [],
}

const startConvoSlice = createSlice({
    name: 'startConvo',
    initialState,
    reducers: {

    }
});


export const {  } = startConvoSlice.actions;
export default startConvoSlice.reducer;


// 'https://i.pcmag.com/imagery/reviews/00XpAmYpxd6wvLkvIO672zY-3..v1569469918.png', 'https://static01.nyt.com/images/2018/07/26/arts/26xp-fortnite2/26xp-fortnite2-articleLarge.jpg?quality=75&auto=webp&disable=upscale'