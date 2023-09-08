// import React, { useEffect, useState } from 'react';
// import './Nav.css';
// const Nav = () => {
//     const [show,handleShow]=useState(false);

//     useEffect(()=>{
//         window.addEventListener("scroll",()=>{
//             if(window.scrollY>100){
//                 handleShow(true);
//             }
//             else handleShow(false);
//         });
//         return ()=>{
//         window.removeEventListener("scroll");
//     };
//     },[]);

//   return (
//     <div className={`nav ${show && "nav__black"}`}>
//         <img 
//         className='nav-logo'
//         src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
//         alt='Netflix Logo'/>

// <img
          
//           className="nav__avatar"
//           src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//           alt=""
//         />
      
//     </div>
//   )
// }

// export default Nav



import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <img
          className="nav__logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;