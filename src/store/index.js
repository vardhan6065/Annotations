import { configureStore } from "@reduxjs/toolkit";

import contentSlice from "./content-slice";
import modalSlice from "./modal-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer : { content : contentSlice.reducer , user: userSlice.reducer , modal : modalSlice.reducer},
})

export default store;