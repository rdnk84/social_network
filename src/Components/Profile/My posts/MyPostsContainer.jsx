import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToStore = (dispatch) => {
    return {
            addPost: (newPostText) => {
            dispatch(addPostCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToStore)(MyPosts);

export default MyPostsContainer;