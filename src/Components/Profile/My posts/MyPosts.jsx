import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";



const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //p-это элемент из массива postData в State

    let newPostElement = React.createRef();

    let onAddPost = (values) => {

       props.addPost(values.newPostText);

     };


    return (
        <div className={s.descriptionBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}
const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name="newPostText" placeholder="Type your message"
                   validate={[required, maxLength30]}/>

            <div>
                <button>Add Post</button>
            </div>
        </div>

    </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export default MyPosts;