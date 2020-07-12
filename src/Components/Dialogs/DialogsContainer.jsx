import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

// function DialogsContainer(props) {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//            let state = store.getState().dialogsPage;
//
//            let onNewMessageChange = (body) => {
//                //а здесь мы с помощью props мы в store отправляем объект(action) с помощью dispatch
// //с вложенным body (кот.пришел из события по клику onchange)
//                store.dispatch(updateNewMessageBodyCreator(body))
//            };
//            let onSendMessageClick = () => {
//                store.dispatch(sendMessageCreator())
//            };
//            return <Dialogs updateNewMessageBody={onNewMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialogsPage={state}/>}}
//         </StoreContext.Consumer>
//     );
// }
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.newMessageBody,
        isAuth: state.auth.isAuth
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);