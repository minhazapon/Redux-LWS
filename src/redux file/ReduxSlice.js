import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducer: {
        increments: (state, actions) => {
            state.count = state.count + actions.payloads
        },
        decrements: (state, actions) => {
            state.count = state.count - actions.payloads
        }
    }
})

export const { increments, decrements } = counterSlice.actions

export default counterSlice.reducer;