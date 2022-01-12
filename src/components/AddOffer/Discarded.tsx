import React from "react";
import { Link } from "react-router-dom";
import "./Discarded.css";
import { BiBookmarkPlus } from "react-icons/bi";

const Discarded = () => {

  return (
    <div className="popup">
        <span>
            Your offer has been discarded. Would you like to add a different one?
        </span>
        <Link className="popup__addoffer" to="/addoffer">
          <BiBookmarkPlus className="popup__icon" />
          <span className="popup__text">Add new offer</span>
        </Link>
        <Link className="popup__home" to="/alloffers">
          <span>Home</span>
        </Link>
    </div>
  );
}

export default Discarded;
