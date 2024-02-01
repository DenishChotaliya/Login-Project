import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./Reducers/todoSlice";
import AuthSlice from "./Reducers/AuthSlice";

export const store = configureStore({
    reducer:{
        todos:todoSlice,
        auth:AuthSlice
    }
})