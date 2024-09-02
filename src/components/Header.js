// Header.js
import React from 'react';
import './Header.css';
import { FaYoutube } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
      <FaYoutube />
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
        <button><FaSearch /></button>   
      </div>
      <div className="header__icons">
        <button><FaBell /></button>
        <button><RiAccountPinCircleFill /></button>
      </div>
    </header>
  );
};

export default Header;
