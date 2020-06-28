import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'How is your..?', likesCount: 9},
        {id: 3, message: 'Good afternoon', likesCount: 15},
        {id: 4, message: 'What a wonderful day', likesCount: 1},
        {id: 5, message: 'doing my homework', likesCount: 3},
        {id: 6, message: 'I am in the car', likesCount: 5},
    ],
    newPostText: 'New Post',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
            // let stateCopy = {...state};
            // stateCopy.postData = [...state.postData];
            // stateCopy.postData.push(newPost);
            // stateCopy.newPostText = '';
            // return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
            // let stateCopy = {...state};
            // stateCopy.newPostText = action.newText;
            // return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }

};
export const addPostCreator = () => ({type: 'ADD-POST'});
export const updateNewPostTextCreator = (text) => ({
    type: 'UPDATE-NEW-POST-TEXT', newText: text
});
export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE', profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
         dispatch (setUserProfile(response.data));
    });
}
export default profileReducer;