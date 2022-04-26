import React from "react";
import { NavLink } from "react-router-dom";


const Nav = () => {
     
    return(
        <>
    <nav className="Navbar">
    {/* <h1><a href="/">M.Qasim Bhalli</a></h1> */}
       <ul>
           <li>
             <NavLink to="/" activeClassName="active" className="nav-link " aria-current="page">Home</NavLink>
           </li>
           <li>
             <NavLink to="/about"  activeClassName="active" className="nav-link " aria-current="page" >About</NavLink>
           </li>
           <li>
             <NavLink to="/resume"  activeClassName="active" className="nav-link " aria-current="page">Resume</NavLink>
           </li>
           <li>
             <NavLink to="/services"  activeClassName="active" className="nav-link " aria-current="page">Services</NavLink>
           </li>
           <li>
             <NavLink to="/portfolio"  activeClassName="active" className="nav-link " aria-current="page">Portfolio</NavLink>
           </li>
           <li>
             <NavLink to="/contact"  activeClassName="active" className="nav-link " aria-current="page">Contact</NavLink>
           </li>

        </ul>

  {/* <MenuIcon className=" bi bi-list mobile-nav-toggle" ></MenuIcon> */}
  {/* <i class="bi bi-list mobile-nav-toggle"></i> */}
</nav>

        </>
    );
};
export default Nav;
