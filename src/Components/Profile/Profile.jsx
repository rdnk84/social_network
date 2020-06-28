import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My posts/MyPostsContainer";
import {Redirect} from "react-router-dom";


function Profile (props) {
    if (!props.isAuth) return <Redirect to={'/login'}/>
  return (
      <div className={s.content}>
          <ProfileInfo profile={props.profile}/>
          <MyPostsContainer
             // store={props.store}-store берем теперь через Context
              // postData={props.profilePage.postData}
              // newPostText={props.profilePage.newPostText}
              // dispatch={props.dispatch}
          />
      </div>
  );
}

export default Profile;
