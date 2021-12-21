import React from 'react'
import './sidebar.css'

export default function SideBar() {
    return (
        <>
        <div className="siderbar">
         <div className="sidebarItems">
             <span className="sidebarTitle">About Me</span>
             <img className="sidebar_img" src="./Assets/priyanka naik.png" alt="" />
             <p className="sidebar-lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt 
                 cupiditate cumque? Perspiciatis nihil  officiis libero unde minima sed eos 
                 laboriosam reprehenderit!</p>
                
         </div>
         <div className="sidebarItems">
             <span className="sidebarTitle">CATEGORIES</span>
             <ul className="sidebarlist">
                 <li className="sidebarlistItem">Life</li>
                 <li className="sidebarlistItem">Music</li>
                 <li className="sidebarlistItem">Stley</li>
                 <li className="sidebarlistItem">Sports</li>
                 <li className="sidebarlistItem">Tech</li>
                 <li className="sidebarlistItem">Cinema</li>
             </ul>
                
         </div>
         <div className="sidebarItems">
             <span className="sidebarTitle">FOLLOW US</span>
             <div className="sidebarSocial">
          <i className=" sidebar-icon fab fa-facebook"></i>
          <i className=" sidebar-icon fab fa-twitter"></i>
          <i className=" sidebar-icon fab fa-linkedin"></i>
          <i className=" sidebar-icon fab fa-instagram"></i>
          </div> 
                
         </div>
       </div>
       </>
    )
}
