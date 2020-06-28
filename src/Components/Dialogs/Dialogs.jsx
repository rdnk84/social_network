import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                      id={dialog.id}/>);
    let messagesItems = state.messagesData.map(messageItem => <Message message={messageItem.message}
                                                                       key={messageItem.id}
                                                                       likesCount={messageItem.likesCount}/>);

    let newMessageBody = props.newMessageBody;

//e-это событие,которое создаеся в input(например пишется сообщение)
    let onNewMessageChange = (e) => {

        let body = e.target.value;
//те мы запускаем здесь коллбэк ф-цию и кладем в нее параметр body,
//который пришел из события по клику onchange
        props.updateNewMessageChange(body)
    };
    let onSendMessageClick = () => {
        props.sendMessage()
    };

   if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesItems}</div>
                <div>
                    <div>
                        <textarea
                            placeholder='Leave your message here'
                            onChange={onNewMessageChange}
                            value={newMessageBody}
                        />
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
