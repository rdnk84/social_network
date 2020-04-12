import React from 'react';
import s from './ProfileInfo.module.css';


function ProfileInfo() {
    return (
        <div>
            <div className={s.mainImg}>
                <img
                    src="https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="banner"/>
            </div>
            <div className={s.descriptionBlock}>Ava+Description</div>
        </div>
    );
}

export default ProfileInfo;
