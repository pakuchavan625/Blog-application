import React from 'react';
import './writepage.css'

export default function WritePage() {
    return (
        <>
        <div className="writepage">
        <img className="write-Image" src="./Assets/nature.png" alt="" />
          <form  className="writeform">
             
              <div className="writeforgroup">
                  <label htmlFor="fileInput">
                  <i className="write-icon fas fa-plus-square"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display:"none"}} />
                  <input type="text" placeholder='Title' className="writeTitle" autoFocus={true} />
              </div>
              <div className="writeforgroup">
                 <textarea type="text" placeholder='Tell your story' className="writeTitle" style={{fontSize:"18px"}}></textarea>
              </div>
              <button className="writesubmit">
                  publish
              </button>
          </form>
        </div>
        </>
    )
       
}
