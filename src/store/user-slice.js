import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userIsPerson:false,
        userIsOrg: false,
    },
    reducers:{
        changeUserToPerson(state,action){
            state.userIsPerson=true;
            state.userIsOrg=false;
        },
        changeUserToOrg(state,action){
            state.userIsPerson=false;
            state.userIsOrg=true;
        },
    }
});

export const userActions = userSlice.actions;

export default userSlice;