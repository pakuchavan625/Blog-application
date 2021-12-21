import React from 'react'
import "./topbar.css"
import {Link} from 'react-router-dom'

function TopBar() {
    const user =false
    return (
        <>
        <div className="top">
          <div className="left">
          <i className=" top-icon fab fa-facebook"></i>
          <i className=" top-icon fab fa-twitter"></i>
          <i className=" top-icon fab fa-linkedin"></i>
          <i className=" top-icon fab fa-instagram"></i>
          </div>
          <div className="center">
             <ul className="toplist">
                 <li className="toplistitem">
                     <Link to="/" className="link"> Home</Link> 
                     </li>
                 <li className="toplistitem">
                 <Link to="/" className="link">  About</Link>
                     </li>
                 <li className="toplistitem">
                 <Link to="/"className="link">Contact</Link>
                     </li>
                 <li className="toplistitem">
                 <Link to="/write" className="link">Write</Link>   
                     </li>
                 <li className="toplistitem">
                 <Link to="/login" className="link"> 
                     { user && "Logout"}</Link>  
                     </li>
             </ul>
              </div>
          <div className="right">
              {user ? (
                  <img className="Topimage" src="./Assets/image-kira.jpg" alt="" />
              ):<span className="topbarLoginLink">
                <Link to="/login" className="link"> Login </Link> 
                <Link to="/register" className="link"> Register</Link> 
              </span> 
            }
              
              <i className="search-icon fas fa-search"></i>

          </div>
        </div>
        </>
    )
}

export default TopBar
