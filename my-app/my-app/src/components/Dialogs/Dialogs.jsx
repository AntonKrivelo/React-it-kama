import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

    let newMessagesElement = React.createRef();

    let submitMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"});
    }

    let onMessageChange = () => {
        let text = newMessagesElement.current.value;
        props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", newText: text});
    }

    let dialogsElements = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messagesData.map(m => <Message message={m.message} id={m.id} /> );
   
    return (
       <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.addMessages}>
                    <textarea value={props.state.newMessageText} onChange={onMessageChange} ref={newMessagesElement} className={classes.textAreaMessage} placeholder="transfereed message..." />
                    <button onClick={submitMessage} className={classes.btnMessage}>Send</button>
                </div>
            </div>
       </div>
    );
}











export default Dialogs;