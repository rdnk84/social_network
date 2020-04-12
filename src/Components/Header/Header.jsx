import React from 'react';
import  s from './Header.module.css';

function Header () {
  return (
      <header className={s.header}>
        <img src="https://png.pngtree.com/png-clipart/20190604/original/pngtree-borders-logo-png-image_1524188.jpg" alt="logo"/>
      </header>
  );
}

export default Header;
