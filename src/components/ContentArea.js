import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './ContentArea.module.css';
import Data from "../data/Data";
import { userActions } from "../store/user-slice";
import { contentActions } from "../store/content-slice";


const ContentArea = () =>{
    const dispatch=useDispatch();
    const userIsPerson=useSelector(state=>state.user.userIsPerson);
    const userIsOrg=useSelector(state=>state.user.userIsOrg);
    const annotations = useSelector(state=>state.content.annotations);
    let currUser=-1;
    let User="";
    const contentId = useSelector(state=>state.content.currentContentId);
    
    if(userIsPerson){
        currUser=1;
        User = "Person";
    }
    if(userIsOrg){
        currUser=0;
        User = "Org";
    }

    let Con= ""
    let Title=<span></span>

    if(contentId>=0){
        Con=Data[contentId].Content;
        Title=<p style={{fontWeight:"bold"}}>{Data[contentId].Title}</p>;
    }

    const changeUserToPersonHandler = () =>{
        dispatch(userActions.changeUserToPerson());
    }
    
    const changeUserToOrgHandler = () =>{
        dispatch(userActions.changeUserToOrg());
    }

    let mystyle = {};    
    let mystyle1 = {};    
    if(userIsPerson){
        mystyle = {
            backgroundColor:"white",
            color: "rgb(94, 24, 160)"
          };
    }
    if(userIsOrg){
        mystyle1 = {
            backgroundColor:"white",
            color: "rgb(94, 24, 160)"
        };
    }

    const textHandler = () =>{
            // const ContentId = useSelector(state=>state.content.currentContentId);
            const currentContent = annotations.find(item=>item.id===contentId);
            
            let countOfAnnotations = 1;

            if(currentContent){
                countOfAnnotations = currentContent.count;
                // console.log(countOfAnnotations);
            }

            // console.log(countOfAnnotations);

            if(window.getSelection().baseNode.parentNode.id !== "content-para")return;

            if(window.getSelection().toString()){
                var selectedText = window.getSelection().toString(); 
                // console.log(window.getSelection().toString());
                // console.log(currUser);
                if(currUser===-1){
                    alert("Please select User!!");
                }
                
                if(currUser===1){
                    dispatch(contentActions.addAnnotation({
                        id: contentId,
                        ann:{
                            id: countOfAnnotations,
                            user: User,
                            text: selectedText,
                        }
                    }))
                }
                if(currUser===0){
                    dispatch(contentActions.addAnnotation({
                        id: contentId,
                        ann:{
                            id: countOfAnnotations,
                            user: User,
                            text: selectedText,
                        }
                    }))
                }
            }
    }
    
    
    return (
        <div className={classes.contentarea}>
            <div className={classes.Title}>
                <button onClick={changeUserToPersonHandler} style={mystyle}>Person</button>
                <button onClick={changeUserToOrgHandler} style={mystyle1}>Org</button>
            </div>
            <div className={classes.actualcontent}>
                {Title}
                <p id="content-para" onMouseUp={textHandler}>{Con}</p>
            </div>
        </div>
    )
}

export default ContentArea;
