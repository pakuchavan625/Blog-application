import React from 'react';
import "./login.css"
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <>
        <div className="Login">
            <span className="logintitle">Login</span>
  <form className="loginform">
        <label>Email:</label>
        <input type="email" className="loginInput" placeholder="Enter your Email" />
        <label>paswword:</label>
        <input type="password" className="loginInput" placeholder="Enter your password" />
       <button className="loginbutton">LogIn</button>
       
       <button className="loginregister">
       <Link to="/register" className="link"> Register</Link> </button>
  </form>
  
        </div>
        </>
       
    )
}
