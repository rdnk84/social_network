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

  //а так мы меняли State до появления экшенов (action)
    // addPost() {
    //     let newPost = {
    //         id: 7,
    //         message: this._state.profilePage.newPostText,-здесь при клике на кнопку в компоненте меняется занчение message
    //         likesCount: 0
    //     };
    //     this._state.profilePage.postData.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._state._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._state._callSubscriber(this._state);
    // },
 //newText здесь - это значение,которое прилетает из callback из внешней компоненты (из MyPosts)
 // из textarea

    dispatch(action) {
 //те здесь profileReducer включает в себя ту часть State, которая является profilePage в стэйте
        this._state.profilePage = profileReducer(this._state.profilePage, action);
 //ну  далее по аналогии
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state._callSubscriber(this._state);

//до редьюсеров экшены создавались так:
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 7,
        //         message: this._state.profilePage.newPostText,
        //         likesCount: 0
        //     };
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._state._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._state._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._state._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messagesData.push({id: 6, message: body})
        //     this._state._callSubscriber(this._state);
        // }

    }
};


export default store;
window.store = store;