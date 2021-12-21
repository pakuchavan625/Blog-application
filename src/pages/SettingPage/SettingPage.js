import React from 'react';
import SideBar from '../../Sidebar/SideBar';
import "./settingpage.css"

export default function SettingPage() {
    return (
        <>
        <div className="settingpage">
        <div className="settingpagewrapper">
            <div className="settingtitle">
                <span className="settingupadtetitle">UPDATE YOUR ACCOUNT</span>
                <span className="settingdelettitle">DELET ACCOUNT</span>
            </div>
            <form className="settingform">
                <label>Profile pitcure</label>
                <div className="settingProfilepitcure">
                    <img className="profilePic" src="./Assets/nature.png" alt="" />
                    <label htmlFor="fileinput">
                    <i className="settingprofilepic-icon fas fa-user-circle"></i>
                    </label>
                    <input type="file"  id="fileinput" style={{display:"none"}}/>
                </div>
          
             <label>UserName:</label>
             <input type="text" placeholder='Priyanak'   />
             <label>Email:</label>
             <input type="email" placeholder='priyankanaik@gmail.com'  />
             <label>password:</label>
             <input type="password" placeholder='password'   />
             <button className="settingSubmit">Upadte</button>
            </form>
        </div>
        <SideBar/>
      
        </div>
        </>
    )
       
}
