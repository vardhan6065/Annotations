import React from "react";
import Title from "./Title";
import Data from "../data/Data";
import Element from "./Element";
import classes from './Records.module.css';

const Records = () =>{
    const titl="Records";
    
    return (
        <div className={classes.Records}>
            <Title tit={titl}/>
            <div className={classes.Ul}>
                {Data.map(item =>
                    <Element
                        key={item.id}
                        id={item.id}
                        Number={item.id+1}
                        Title={item.Title}
                        selected= {item.selected}
                    /> 
                )}
            </div>
        </div>
    )
}

export default Records;