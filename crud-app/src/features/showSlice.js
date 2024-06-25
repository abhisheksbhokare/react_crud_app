import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    record: {
        id: '',
        name: '',
        email: ''
    }
};

export const showSlice = createSlice({
    name : 'showData',
    initialState,
    reducers : {
        showData : (state, action) => {
            state.record = action.payload;
        }
    }
})

export const {showData} = showSlice.actions;

export default showSlice.reducer;