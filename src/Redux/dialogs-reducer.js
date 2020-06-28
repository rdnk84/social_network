const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
       dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'},
        ],
        messagesData: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'How is your..?'},
            {id: 3, message: 'Good afternoon'},
            {id: 4, message: 'What a wonderful day'},
            {id: 5, message: 'doing my homework'},
            {id: 6, message: 'I am in the car'},
        ],
        newMessageBody: ""
    }

const dialogsReducer = (state = initialState, action) => {
    // let stateCopy;
    // let stateCopy = {
    //     ...state,
    // // messages: [...state.messagesData]
    // };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
            // stateCopy.newMessageBody = action.body;
            // return stateCopy;
        case SEND_MESSAGE:
            debugger
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };
//старая запись добавления сообщения
            // stateCopy.messagesData.push({id: 7, message: body})
            // return stateCopy;
        default:
            return state
    }
    };
//эта функция создается без каких-л передаваемых параметров
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

//эта функция здесь создается с передаваемым ей параметром body(этот параметр приходит из компоненты,извне)
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});

    export default dialogsReducer;