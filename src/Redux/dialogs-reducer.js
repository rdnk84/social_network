// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    // newMessageBody: "" -теперь не нужен
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            debugger
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 6, message: body}]
            };

        default:
            return state
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

//этот action не нужен с введением redux-form
// export const updateNewMessageBodyCreator = (body) => ({
//     type: UPDATE_NEW_MESSAGE_BODY, body: body
// });

export default dialogsReducer;