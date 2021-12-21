import React from 'react';
import SideBar from '../../Sidebar/SideBar'
import SinglePost from '../../Singlepost/SinglePost';
import "./singlepage.css"

export default function SinggelPage() {
    return (
        <>
        <div className="singlepage">
          <SinglePost/>
            <SideBar/>
        </div>
        </>
    )
}
