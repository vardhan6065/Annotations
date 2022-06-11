import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentActions } from "../store/content-slice";
import classes from './Annotations.module.css'


const AnnotationItem = (props) =>{
    const dispatch=useDispatch();
    const currContentId = useSelector(state=> state.content.currentContentId);

    const removeAnnotationHandler = () =>{
        // console.log(props.id);
        // console.log(currContentId);

        dispatch(contentActions.removeAnnotation({
            itemId: props.id,
            contentId: currContentId,
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