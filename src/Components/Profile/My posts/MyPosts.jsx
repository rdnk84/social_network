import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    return (
        <div className={s.descriptionBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post message='Hi, how are you?'/>
                <Post message="It's my first post"/>
                <Post message="It's my second post"/>
            </div>
        </div>
    );
}

export default MyPosts;