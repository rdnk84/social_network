import React from 'react';
import '../../App.css';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar () {
  return (
      <nav className={s.nav}>
          <div className={s.item}><NavLink to="/Profile" activeClassName={s.active}>Profile</NavLink></div>
          <div className={s.item}><NavLink to="/Dialogs" activeClassName={s.active}>Messages</NavLink></div>
          <div className={s.item}><NavLink to="/Users" activeClassName={s.active}>Users</NavLink></div>
          <div className={s.item}><NavLink to="">News</NavLink></div>
          <div className={s.item}><a href="">Music</a></div>
          <div className={s.item}><a href="">Settings</a></div>
      </nav>
  );
}

export default Navbar;
