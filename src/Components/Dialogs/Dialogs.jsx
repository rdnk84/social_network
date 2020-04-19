import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";


function Dialogs(props) {

    let dialogsElements = props.state.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    let messagesItems = props.state.messagesData.map( messageItem => <Message message={messageItem.message}
                                                                              likesCount={messageItem.likesCount}/>);
    let addTextElement = React.createRef();
    let newMessageInput = () => {
        let text = addTextElement.current.value;
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesItems}
             </div>
            <textarea ref={addTextElement}>input your message please</textarea>
            <button onClick={newMessageInput}>Add</button>
         </div>
    );
}
export default Dialogs;
