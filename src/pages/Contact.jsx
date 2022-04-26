import React from "react";
import Navbar from '../components/Navbar';
import '../components/validate';
import '../components/contact.php';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () =>{
    return(
        <>
             <Navbar/>
             {/* <div className=' mt-5 mx-5'> 
            <h1 className='text-danger'> It's Contact Page</h1>
            </div> */}


            {/* <!-- ======= Contact Section ======= --> */}
  <section id="contact" className="contact mt-3">
    <div className="container">

      <div className="section-title">
        <h2>Contact</h2>
        <p>Contact Me</p>
      </div>

      <div className="row mt-2">

        <div className="col-md-6 d-flex align-items-stretch">
          <div className="info-box">
            <LocationOnOutlinedIcon className="bx"></LocationOnOutlinedIcon>
            <h3>My Address</h3>
            <p>Gulberg 3, Lahore, Punjab, Pakistan</p>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
          <div className="info-box">
          <ShareOutlinedIcon className="bx"></ShareOutlinedIcon>
            <h3>Social Profiles</h3>
            <div className="social-links">
              <a href="/" className="twitter"><TwitterIcon></TwitterIcon></a>
              <a href="/" className="facebook"><FacebookRoundedIcon></FacebookRoundedIcon></a>
              <a href="/" className="instagram"><InstagramIcon></InstagramIcon></a>
              {/* <a href="/" className="google-plus"><i className="bi bi-skype"></i></a> */}
              <a href="/" className="linkedin"><LinkedInIcon></LinkedInIcon></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
          <EmailOutlinedIcon  className="bx"></EmailOutlinedIcon>
            <h3>Email Me</h3>
            <a className="email-me" href="mailto:bhallibhai69@gmail.com">bhallibhai69@gmail.com</a>
          </div>
        </div>
        <div className="col-md-6 mt-4 d-flex align-items-stretch">
          <div className="info-box">
          <WifiCalling3OutlinedIcon className="bx"></WifiCalling3OutlinedIcon>
            <h3>Call Me</h3>
            <a className="email-me" href="tel:+923497273482">+923497273482</a>          
            </div>
        </div>
      </div>

      <form action="../components/contact.php" method="post" 
    //   role="submit" 
      className="php-email-form mt-4">
        <div className="row">
          <div className="col-md-6 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
          </div>
        </div>
        <div className="form-group mt-3">
          <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
        </div>
        <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">Your message has been sent. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Send Message</button></div>
      </form>

    </div>
  </section>
  {/* <!-- End Contact Section --> */}
        </>
    );
}
export default Contact;