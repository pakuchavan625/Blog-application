import React from 'react'
import "./post.css"

export default function Post() {
    return (
        <>
        <div className="detailpost">
          <img className="Post-Img" src="./Assets/nature.png" alt="" />
          <div className="Postingo">
              <div className="Postcats">
                  <span className="Postcat">Music</span>
                  <span className="Postcat">Life</span>
              </div>
              <hr />
              <span className="Post-Title">
                  Lorem ipsum dolor sit amet adipisicing .
     
              </span>
              <span className="Post-Date">1 hour ago</span>
          </div>
          <p className='Post-Discription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Unde animi eius fuga libero nisi illo voluptate eveniet 
              neque possimus tempore. Facilis sint sequi impedit enim 
              sapiente quas atque temporibus in magni quasi maxime reprehenderit 
              aliquam quae dignissimos aliquid id incidunt, sed mollitia minus ab?
               Natus doloribus reiciendis eaque facilis libero!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Unde animi eius fuga libero nisi illo voluptate eveniet 
              neque possimus tempore. Facilis sint sequi impedit enim 
              sapiente quas atque temporibus in magni quasi maxime reprehenderit 
              aliquam quae dignissimos aliquid id incidunt, sed mollitia minus ab?
               Natus doloribus reiciendis eaque facilis libero!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Unde animi eius fuga libero nisi illo voluptate eveniet 
              neque possimus tempore. Facilis sint sequi impedit enim 
              sapiente quas atque temporibus in magni quasi maxime reprehenderit 
              aliquam quae dignissimos aliquid id incidunt, sed mollitia minus ab?
               Natus doloribus reiciendis eaque facilis libero!</p>
        </div>
        </>
    )
}
