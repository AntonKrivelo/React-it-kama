import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";


const Dialogs = (props) => {

    let newMessagesElement = React.createRef();
    
    let submitMessage = () => {
        let textMessage = newMessagesElement.current.value;
        alert(textMessage);
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
                <form className={classes.addMessages}>
                    <textarea ref={newMessagesElement} className={classes.textAreaMessage} placeholder="transfereed message..."></textarea>
                    <button onClick={submitMessage} className={classes.btnMessage}>Submit</button>
                </form>
            </div>
       </div>
    );
}











export default Dialogs;