import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})
//те в переменной reducers по сути лежит наш State со св-вами ProfilePage,DialogsPage и SideBar

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store



export default store;