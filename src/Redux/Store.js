import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'How is your..?', likesCount: 9},
                {id: 3, message: 'Good afternoon', likesCount: 15},
                {id: 4, message: 'What a wonderful day', likesCount: 1},
                {id: 5, message: 'doing my homework', likesCount: 3},
                {id: 6, message: 'I am in the car', likesCount: 5},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log()
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._state._callSubscriber = observer;
    },

    dispatch(action) {
 //те здесь profileReducer включает в себя ту часть State, которая является profilePage в стэйте
        this._state.profilePage = profileReducer(this._state.profilePage, action);
 //ну  далее по аналогии
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state._callSubscriber(this._state);



    }
};


export default store;
window.store = store;