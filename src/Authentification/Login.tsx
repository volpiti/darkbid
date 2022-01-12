import { Component } from "react";
import "./LogIn.css";
import { FiUserCheck } from "react-icons/fi";


export default class LogIn extends Component {
    state = {
      user: '',
      rememberMe: false
    };
   
    handleChange = (event: { target: any; }) => {
      const input = event.target;
      const value = input.type === 'checkbox' ? input.checked : input.value;
   
      this.setState({ [input.name]: value });
    };
   
    handleFormSubmit = () => {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', String(rememberMe));
        localStorage.setItem('user', rememberMe ? user : '');
        localStorage.setItem("role", rememberMe ? "user" : "")
      };


    render() {
        return (
          <form className="login-form" onSubmit={this.handleFormSubmit}>
            <span className="login-form__text">Enter your user ID:</span>
            <label>
              <input className="login-form__input" name="user" value={this.state.user} onChange={this.handleChange}/>
            </label>
            <label>
              <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/> Remember me
            </label>
            <button className="login-form__submit" type="submit">Sign In</button>
            {localStorage.getItem('rememberMe') === "true" &&
              <div className="infobox">
                <FiUserCheck className="infobox__icon"/>
                <p className="infobox__text">You are currentyly signed in as user with id {localStorage.getItem('user')}.</p>
                <p className="infobox__text">Use the button in the right upper corner to sign out.</p>
                <p className="infobox__text">Use the form above to sign in as different user.</p>
              </div>
            }
          </form>
          
        );
      }
  }