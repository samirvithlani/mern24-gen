import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/BookSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
    }
})