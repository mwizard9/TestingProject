import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slice/UserSlice";

const Store = configureStore({
    reducer: {
        users: userSlice,
    }
})

export default Store;

