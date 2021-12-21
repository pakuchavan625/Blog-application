import React from 'react';
import "./register.css"
import {Link} from 'react-router-dom'

export default function Register() {
    return (
        <>
        <div className="register">
            <span className="registertitle">Register</span>
  <form className="registerform">
        <label>UserName:</label>
        <input type="email" className="registerInput" placeholder="Enter your UserName" />
        <label>Email:</label>
        <input type="email" className="registerInput" placeholder="Enter your Email" />
        <label>paswword:</label>
        <input type="password" className="registerInput" placeholder="Enter your password" />
       <button className="registerbutton">Register</button>
       
       <button className="registerLogin">
       <Link to="/login" className="link">  Login</Link> 
           </button>
       
  </form>
  
        </div>
        </>
       
    )
}
