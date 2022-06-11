import React from "react";
import { useDispatch } from "react-redux";
import { contentActions } from "../store/content-slice";
import { modalActions } from "../store/modal-slice";
import classes from './Annotations.module.css'
import { useSelector } from 'react-redux/es/exports';


const AnnotationItem = (props) =>{
    const dispatch=useDispatch();
    const currContentId = useSelector(state=> state.content.currentContentId);
    // const anno = useSelector(state=> state.content.annotations);
    const cancelItem = useSelector(state=> state.modal.cancel);
    const deleteItem = useSelector(state=> state.modal.delete);
    // const showPrompt = useSelector(state=>state.modal.promptIsShown);



    const removeAnnotationHandler = () =>{
        
            dispatch(modalActions.showPrompt());
            console.log(cancelItem)
            
            if(cancelItem && !deleteItem)
            return;
            
            if(deleteItem)
            dispatch(contentActions.removeAnnotation({
            itemId: props.id,
            contentId: currContentId,
            text: props.TEXT,
            }));
    
    }


    return (
        <p className={classes.eachAnnotation}>
                    <span>{props.TEXT}</span>
                    <span style={{fontWeight:"bold"}}>{props.USER}</span>
                    <button onClick={removeAnnotationHandler}>X</button>
        </p>
    )
}

export default AnnotationItem;