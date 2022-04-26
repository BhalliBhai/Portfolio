import React from "react";
import Nav from "../components/Nav";
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Home = () =>{
return (<>
<header id="header">
    <div className="container">

      <h1><a href="/">M.Qasim Bhalli</a></h1>
      <h2>I'm a passionate <span>React Developer</span> from Lahore, Pakistan</h2>

      {/* <!-- .navbar --> */}
      <Nav></Nav>

      <div className="social-links">
        <a href="https://twitter.com/1bhallibhai1" rel="noopener noreferrer" target="_blank" className="twitter">
        <TwitterIcon/> 
        </a>
        <a href="https://wa.me/+923497273482" rel="noopener noreferrer" target="_blank" className="facebook"> 
        <WhatsAppIcon/>
        </a>
        <a href="https://www.instagram.com/bhalli.bhai/" rel="noopener noreferrer" target="_blank" className="instagram">
        <InstagramIcon/> 
        </a>
        <a href="https://www.instagram.com/bhalli.bhai/" rel="noopener noreferrer" target="_blank" className="linkedin"> 
        <LinkedInIcon/>
        </a>
      </div>
    </div>
  </header>
  {/* <!-- End Header --> */}
</>
);
}
export default Home;