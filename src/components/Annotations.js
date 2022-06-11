import React from "react";
import classes from './Annotations.module.css'
import Title from "./Title";
import { useSelector } from "react-redux";
import AnnotationItem from "./AnnotationItem";

const Annotations = () =>{
    const annotations = useSelector(state=>state.content.annotations);
    const currContentId = useSelector(state=>state.content.currentContentId);

    let con=<p className={classes.eachAnnotation}>No annotations</p>;

    const annotationExistsForCurrentContentId = annotations.find(item=>item.id===currContentId);

    if(annotationExistsForCurrentContentId){
        con=<div>
            {annotationExistsForCurrentContentId.ann.map(item=>(
                <AnnotationItem
                    key={item.id}
                    id={item.id}
                    TEXT={item.text}
                    USER={item.user}
                />
            ))
        }
        </div>
    }

    return (
        <div className={classes.annotations}>
            <Title tit={"Annotations"}/>
            {con}
        </div>
    )
}

export default Annotations;
