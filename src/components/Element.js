import React from "react";
import { useDispatch} from "react-redux";
import { contentActions } from "../store/content-slice";
import classes from './Element.module.css';

const Element = (props) =>{
    const dispatch = useDispatch();
    // const currContentId = useSelector(state=>state.content.currentContentId);
     
    // let mystyle = {};
    
    const changeContentHandler = () =>{
        dispatch(contentActions.changeContent(props.id));
        
        // if(currContentId===props.id){
        //     mystyle = {
        //         backgroundColor: "rgb(190, 186, 186)",
        //     };
        // }
    }
    

    return (
        <p className={classes.Li} onClick={changeContentHandler} >
            {props.Number}. {props.Title}
        </p>
    )
}

export default Element;