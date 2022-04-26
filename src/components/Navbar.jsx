import React from "react";
import { NavLink } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  
   return(
       <>
       
 <nav className="navbar navbar-expand-lg  navbar-sticky sticky-top">
  <div className="container">
    <NavLink className="navbar-brand text-light text-left" to="/" aria-current="page">LOGO</NavLink>
    <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse Navbar m-auto" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
             <li  className="nav-item">
             <NavLink to="/" activeClassName="active" className="nav-link nav-toggle" aria-current="page">Home</NavLink>
           </li>
           <li  className="nav-item">
             <NavLink to="/about"  activeClassName="active" className="nav-link" aria-current="page" >About</NavLink>
           </li>
           <li  className="nav-item">
             <NavLink to="/resume"  activeClassName="active" className="nav-link " aria-current="page">Resume</NavLink>
           </li>
           <li  className="nav-item">
             <NavLink to="/services"  activeClassName="active" className="nav-link " aria-current="page">Services</NavLink>
           </li>
           <li  className="nav-item">
             <NavLink to="/portfolio"  activeClassName="active" className="nav-link " aria-current="page">Portfolio</NavLink>
           </li>
           <li  className="nav-item">
             <NavLink to="/contact"  activeClassName="active" className="nav-link " aria-current="page">Contact</NavLink>
           </li>
      </ul>
    </div>
  </div>
</nav>






       {/* ------------- */}
{/* <div id="header" className="header-top">
<div className="container">
<nav className="Navbar ">
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
</nav>
</div>
</div> */}


       </>
   );

}
export default Navbar;


