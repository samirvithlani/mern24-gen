import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/BookSlice";
import bankReducer from "./redux/BankSlice";
import themeReducer from "./redux/ThemeSlice";
import contentSlice from "./redux/ContentSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        bank : bankReducer,
        theme:themeReducer,
        content:contentSlice
    }
})