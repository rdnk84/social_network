import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    //p-это элемент из массива postData в State

    let newPostElement = React.createRef();

    let onAddPost = () => {
        let text = newPostElement.current.value;
       props.addPost(text);
     };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };


    return (
        <div className={s.descriptionBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        //обработчик событий onChange работает так: только пользователь вводит что-то в инпут
                        //сразу же срабатывает. И поэтому мы можем сюда положить callback функцию, которая уже
                        //сделает то,что нам нужно (в данный момент-изменит State)
                        onChange={onPostChange}
                        value={props.newPostText}/>
                    <div>
                        <button onClick={onAddPost}>Add Post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;