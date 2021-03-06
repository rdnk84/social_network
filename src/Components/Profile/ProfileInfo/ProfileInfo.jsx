import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/Img/IMG_4739_1.jpg"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div className={s.mainImg}>*/}
            {/*    <img*/}
            {/*        src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"*/}
            {/*        alt="banner"/>*/}
            {/*</div>*/}

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className={s.mainImg}/>
                    {props.isOwner && <input  type={"file"} />}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
