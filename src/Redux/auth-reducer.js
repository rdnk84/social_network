import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                // userId: action.userId,
                // login: action.login,
                // email: action.email,
                // isAuth: true
            }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}
});
//или  setUserData = (data) => ({type: SET_USER_DATA, data})
//где data-это объект со св-вами userId, email, Login-это данные с сервера
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me()

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, login, email, true))
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}));
            }
            //это если нам нужно как-то показать в UI если пароль введен неверно например (resultCode не ноль)
            //здесь "login"-это имя формы(см.компоненту) и здесь {email: "Email is wrong"}  мы указываем в каком конкретно поле произошла ошибка
            //или,если поставить _error, то это общее поле где бы ни произошла ошибка

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData(null, null, null, false))
            }
  }


export default authReducer;