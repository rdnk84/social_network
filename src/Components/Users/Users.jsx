import React from "react";
import s from "./Users.module.css";
import noPhoto from "../../assets/Img/noPhoto.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";

let Users = (props) => {
    //высчитывам сколько страниц у нас будет всего
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

//и в зависимости от общего числа страниц отображаем это количество на странице (в виде чисел 1,2,3...)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={s.bodyColor}>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : noPhoto}
                             className={s.userPhoto}/>
                             </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
 //те теперь вся логика спрятана в users-reducer в thunkCreator unfollow
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                     <span>
                    <div>{u.name}</div>
                    <div>{u.status}></div>
                </span>
                 <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                     </span>
            </div>)
        }
    </div>
}

export default Users