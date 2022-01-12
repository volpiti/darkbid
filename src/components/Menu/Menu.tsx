import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { RiFileList3Line } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiHome } from "react-icons/fi";
import { RiSettings4Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

interface IMenuProps {
  onClick: () => void;
  signed: boolean;
}

const Menu: React.FC<IMenuProps> = (props) => {

  return (
    <ul className="menu-list">
      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/alloffers">
          <FiHome className="menu-list__icon" />
          <span className="menu-list__text">Home</span>
        </Link>
      </li>
      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/myoffers">
          <RiFileList3Line className="menu-list__icon" />
          <span className="menu-list__text">My offers</span>
        </Link>
      </li>
      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/addoffer">
          <BiBookmarkPlus className="menu-list__icon" />
          <span className="menu-list__text">Add offer</span>
        </Link>
      </li>

      <div className="separator"></div>

      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/settings">
          <RiSettings4Line className="menu-list__icon" />
          <span className="menu-list__text">Settings</span>
        </Link>
      </li>
      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/support">
          <BiSupport className="menu-list__icon" />
          <span className="menu-list__text">Support</span>
        </Link>
      </li>
      <li onClick={props.onClick}>
        <Link className="menu-list__item" to="/about">
          <IoMdInformationCircleOutline className="menu-list__icon" />
          <span className="menu-list__text">About</span>
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
