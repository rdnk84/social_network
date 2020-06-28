import {authAPI} from "../api/api";

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
                userId: action.userId,
                login: action.login,
                email: action.email,
                isAuth: true
                    }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
};

export const setAuthUserData = (userId, login, email) => ({type: SET_USER_DATA, userId, email, login});
//или  setUserData = (data) => ({type: SET_USER_DATA, data})
//где data-это объект со св-вами userId, email, Login-это данные с сервера
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch (setAuthUserData(id, login, email))
            }
        });
}

export default authReducer;