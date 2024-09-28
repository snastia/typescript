import { configureStore } from "@reduxjs/toolkit";
import { todosReducers } from "./slice";

export const store = configureStore({
    reducer: todosReducers
})

export type RootState = ReturnType<typeof store.getState>