import { configureStore } from "@reduxjs/toolkit";
import BlogsSlice from "../slices/BlogSlice";

const store = configureStore({
    reducer: {
        blogreducer:BlogsSlice
    }
})

export default store