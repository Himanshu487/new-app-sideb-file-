import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./Navbar.css";
import "../App.css";
import { IconContext } from 'react-icons';
// import App from '../App';


const Navbar = () => {
  
    const [sidebar, setSidebar]=useState(false);

    const showSidebar=() => setSidebar(!sidebar);

  return (
  <>
  <IconContext.Provider value={{color:"red"}}>
    <div className='navbar111'>
        <NavLink to='#' className='menu-bars'>
       <FaIcons.FaBars onClick={showSidebar}/>
       
        </NavLink>
    <h1 className='title-nav-f'>Shop India</h1>
        {/* <Header/> */}

    </div> 
    {/* props */}
    {/* <App toggle={sidebar ? 'nav-menu active nav-text a' :'nav-menu'}/> */}

    <nav className={sidebar ? 'nav-menu active nav-text a' :'nav-menu'}>
     <ul className='nav-menu-items' >
     {/* onClick={showSidebar} */}
       {/* to toggle the menu onclick will be added on the top */}
         <li className='navbar-toggle'>

             <NavLink to='#' className='menu-bars' onClick={showSidebar}>
             <AiIcons.AiOutlineClose/>
             </NavLink>
          
         </li>
         {/* sidebar items */}
         {SidebarData.map((item,index)=>{
          
          return(
            <li onClick={showSidebar} key={index} className={item.cName} >
              
            
            <NavLink to={item.path}>
                {item.icon}
                <span>{item.title}</span>
            </NavLink>
            
             </li>
          ) 
        })}
    
     </ul>
    </nav>
    </IconContext.Provider>
 </> 
 );
}

export default Navbar;