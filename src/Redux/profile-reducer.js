import {profileAPI, usersAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How is your..?', likesCount: 9},
        {id: 3, message: 'Good afternoon', likesCount: 15},
        {id: 4, message: 'What a wonderful day', likesCount: 1},
        {id: 5, message: 'doing my homework', likesCount: 3},
        {id: 6, message: 'I am in the car', likesCount: 5},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }

        }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }

};
export const addPostCreator = (newPostText) => ({type: 'ADD-POST', newPostText});

export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const setStatus = (status) => ({type: 'SET_STATUS', status})

//Thunks
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
        }
    )
}
export const updateUserStatus = (status) => (dispatch) => {

    profileAPI.updateStatus(status).then(response => {

            if (response.data.resultCode === 0)
                dispatch(setStatus(status))
        }
    )
}
export default profileReducer;