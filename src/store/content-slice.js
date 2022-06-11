import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        currentContentId:-1,
        annotations :[],
    },
    reducers:{
        changeContent(state,action){
            const newContentId=action.payload;
            state.currentContentId = newContentId;
        },
        addAnnotation(state,action){
            const newAnnotation = action.payload;
            const existingAnnotation = state.annotations.find(item=>item.id===newAnnotation.id);
            if(!existingAnnotation){
                state.annotations.push({
                    id: state.currentContentId,
                    count: 2,
                    ann: [{
                        id: newAnnotation.ann.id,
                        user: newAnnotation.ann.user,
                        text: newAnnotation.ann.text, 
                    }]
                })
            }else{
                existingAnnotation.ann.push(newAnnotation.ann);
                existingAnnotation.count++;
            }
        },
        removeAnnotation(state,action){
            const removeIds = action.payload;
            // const existingAnnotation = state.annotations.find(item=>item.id===removeIds.id);


            // const existingItem = state.annotations[removeIds.contentId].ann.find(item=> item.id === removeIds.itemId);
            state.annotations[removeIds.contentId].ann = state.annotations[removeIds.contentId].ann.filter(item => item.id !== removeIds.itemId);
        }
    }
});

export const contentActions = contentSlice.actions;

export default contentSlice;