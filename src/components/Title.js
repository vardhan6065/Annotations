import React from "react";
import classes from './Title.module.css';

const Title = (props) =>{
    return (
        <div className={classes.Title}>
            {props.tit}
        </div>
    )
}

export default Title;