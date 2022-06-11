import { configureStore } from "@reduxjs/toolkit";

import contentSlice from "./content-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer : { content : contentSlice.reducer , user: userSlice.reducer},
})

export default store;