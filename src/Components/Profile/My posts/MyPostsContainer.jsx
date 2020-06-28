import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     return (
// //те в презентационную компоненту мы передаем только данные (в виде атрибутов) и коллбэки
//         <StoreContext.Consumer>
// {/*через context.consumer наша презентационная компонента принимает данные Store из*/}
// {/*родительской компоненты. где она их отдает через context.provider*/}
//             {(store) => {
//                 let state = store.getState();
//                 let addPost = () => {store.dispatch(addPostCreator());};
// //т.е теперь вместо отдельного метода addPost мы должны поставить универсальный метод dispatch, который будет диспатчить action
// //тк метод addPostCreator запускается внутри dispatch и возвращает объект action
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextCreator(text);
//                     store.dispatch(action);
//                 };
//                 return <MyPosts updateNewPostText={onPostChange}
//                                 addPost={addPost}
//                                 posts={state.profilePage.postData}
//                                 newPostText={state.profilePage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToStore = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text))
        },
        addPost: () => {
            dispatch(addPostCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToStore)(MyPosts);

export default MyPostsContainer;