import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <>
        <div className="header">
           <div className="headertitle">
               <span className="headertitlesm"> React & Node</span>
               <span className="headertitlelg"> Blog</span>
           </div>
           <img className="Blog-img" src="./Assets/blog.jpg" alt="" />
        </div>
        </>
    )
}
