import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'count',
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.count = state.count + actions.payload;
        },
        decrement: (state, actions) => {
            state.count = state.count - actions.payload;
        }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer;