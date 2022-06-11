import React from "react";
import classes from './Annotations.module.css'
import Title from "./Title";
import { useSelector } from "react-redux";
import AnnotationItem from "./AnnotationItem";

const Annotations = () =>{
    const annotations = useSelector(state=>state.content.annotations);
    const currContentId = useSelector(state=>state.content.currentContentId);
    const userIsPerson=useSelector(state=>state.user.userIsPerson);
    const userIsOrg=useSelector(state=>state.user.userIsOrg);
    let currUser=-1;
    let User="";
    if(userIsPerson){
        currUser=1;
        User = "Person";
    }
    if(userIsOrg){
        currUser=0;
        User = "Org";
    }

    let con=<p className={classes.eachAnnotation}>No annotations</p>;
    
    // if(annotations.length && (userIsOrg || userIsPerson)){
    //     console.log(currUser);
    //     console.log(annotations[0].ann[0].text);
    // }

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
