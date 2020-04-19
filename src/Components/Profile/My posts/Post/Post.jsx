import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            {props.message}
            <span>{props.likesCount} likes</span>
        </div>
    );
}

export default Post;
