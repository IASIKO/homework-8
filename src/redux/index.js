import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./slices/TodoSlices";

export const store = configureStore({
    reducer:{
        todo: todoReducer
    }
})