import React from "react";
import { modalActions } from "../store/modal-slice";
import Modal from './Modal';
import classes from './Prompt.module.css';
import { useDispatch } from "react-redux/es/exports";

const Prompt = props =>{
    const dispatch = useDispatch();

    const cancelPromptHandler = props =>{
        dispatch(modalActions.cancelHidePrompt());
    }

    const deletePromptHandler = props =>{
        dispatch(modalActions.deleteHidePrompt());
    }

    return (<Modal>
        <div className={classes.promptbox}>
            <p className={classes.message}>Are You Sure You want to Delete ?</p>
            <div className={classes.buttonclass}>
                <button className={classes.butt} onClick={cancelPromptHandler}>Cancel</button>
                <button className={classes.redbutt} onClick={deletePromptHandler}>Delete</button>
            </div>
        </div>
    </Modal>)
}

export default Prompt;