import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {

    return (
        <header className={s.header}>
            <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-borders-logo-png-image_1524188.jpg"
                 alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/Login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;
