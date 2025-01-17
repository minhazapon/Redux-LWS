import { configureStore } from "@reduxjs/toolkit";
import reducer from "./ReduxSlice";

export const store = configureStore({
    reducer: {
        counter: reducer
    }
})

// export type rootState = ReturnType<typeof store.getState>