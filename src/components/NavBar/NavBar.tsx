import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Logo from "./../../images/darkbid-logo.png"
import LogOut from "../../Authentification/Logout";
import { AiOutlineUserAdd } from "react-icons/ai";

interface INavBarProps {
  onClick: () => void;
  show: boolean;
}

const NavBar: React.FC<INavBarProps> = (props) => {

  const signed = localStorage.getItem('rememberMe');

  return (
    <ul className="nav-bar-list">
      <li className="nav-bar-list__item nav-bar-list__item--menu">
        <button className="nav-bar-list__item--menu" onClick={props.onClick}>
          {props.show ? <IoMdClose className="icon-size"/> : <MdMenu className="icon-size"/>}
        </button>
      </li>
      <li className="nav-bar-list__item nav-bar-list__item--logo">
        <Link to="/alloffers">
          <img className="logo-size" src={Logo} alt="Logo of darkbid" />
        </Link>
      </li>
      <li className="nav-bar-list__item">
        {signed ? <LogOut /> : <Link className="login-button" to="/signin">
          <AiOutlineUserAdd className="login-button__icon" />
          <span className="login-button__text">Sign in</span>
        </Link>}
      </li>
    </ul>
  );
}

export default NavBar;