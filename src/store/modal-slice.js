import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
        name : 'modal',
        initialState : {
            delete:false,
            cancel: false,  
            promptIsShown: false,  
        },
        reducers:{
            showPrompt(state,action){
                state.promptIsShown = true;
            },
            cancelHidePrompt(state,action){
                state.promptIsShown = false;
                state.cancel = true;
                state.delete = false;
            },
            deleteHidePrompt(state,action){
                state.promptIsShown = false;
                state.cancel=true;
                state.delete = true;
            }
        }
});

export const modalActions = modalSlice.actions;

export default modalSlice;