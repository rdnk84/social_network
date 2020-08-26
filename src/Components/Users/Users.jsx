import React from "react";
import s from "./Users.module.css";
import Paginator from "../Common/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div className={s.bodyColor}>
        <Paginator onPageChanged={onPageChanged} currentPage={currentPage}
                   totalItemsCount={totalUsersCount} pageSize={pageSize}/>
        {
            users.map(u => <User user={u} key={u.id}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow} unfollow={props.unfollow}
            />)
        }
    </div>
}

export default Users