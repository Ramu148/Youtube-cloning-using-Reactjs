// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { IoIosAddCircle } from "react-icons/io";
import { MdUnsubscribe } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
      <li><FaHome /></li>
 <li>  <SiYoutubeshorts /></li>
        <li><IoIosAddCircle /></li>
        <li><MdUnsubscribe /></li>
        <li><MdVideoLibrary /></li>
        <li><BiSolidUserAccount /></li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;
