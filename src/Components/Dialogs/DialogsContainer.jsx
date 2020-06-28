import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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
//сюда мы забираем ту часть стейта, которая нам нужна в этой компоненте
    return {
        dialogsPage: state.dialogsPage,
        newMessageBody: state.newMessageBody,
        isAuth: state.auth.isAuth
    }
}
//те эта функция берет весь State(это входящий параметр у нее),а возвращает только ту часть
//стейта,которая нам нужна в данном конкретном случае
//те она мапит Стейт и возвращает копию его части (мапит и возвращает-это то,что происходит
//"под капотом", это делается в библиотеке Redux

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageChange: (body) => {
            debugger
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
//dispatch параметром в эту функцию(mapDispatchToProps)вкладывает также библиотека Redux
//"под каптотом"

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
//connect возвращает нам контейнерную компоненту по сути (которую я закомментила выше)
//те отрисовывает чистую компоненту Dialogs, и пропсами в нее передает нужную ей часть стейта
//и нужные колбеки

export default DialogsContainer;
