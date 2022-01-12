import { Component } from "react";
import "./LogOut.css";
import { AiOutlineUserDelete } from "react-icons/ai";

export default class LogIn extends Component {
    state = {
      user: '',
      rememberMe: false
    };
      
    handleFormSubmit = () => {
        localStorage.clear();
      };
   
    render() {
        return (
          <form id="Logout" onSubmit={this.handleFormSubmit}>
            <button className="logout-button" type="submit">
                <AiOutlineUserDelete className="logout-button__icon" />
                <span className="logout-button__text">Sign out</span>
            </button>
          </form>
          
        );
      }
  }