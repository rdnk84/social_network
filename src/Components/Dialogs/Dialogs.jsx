import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import * as PropTypes from "prop-types";
import {Field, reduxForm} from "redux-form";
import AddMessageFormRedux from "./AddMessageForm"


function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id}
                    id={dialog.id}/>);
    let messagesItems = state.messagesData.map(messageItem =>
        <Message message={messageItem.message}
                 key={messageItem.id}
                 likesCount={messageItem.likesCount}/>);

    let newMessageBody = props.newMessageBody;

    let addNewMessage = (values) => {
        debugger
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesItems}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;
