import React from "react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { ViewAgenda } from "@mui/icons-material";

const Intro = () =>{

  // calsulate age
  let newDate = new Date()
  let year = newDate.getFullYear();
  let birth = 1999;
  let age = year - birth; 

    return(
        <>
        <div className="about-me container">
        <div className="row">
        <div className="col-lg-4">
          {/* <img src="assets/img/me.jpg" className="img-fluid" alt=""/> */}
          <img className="img-fluid profile" src={require('../img/profile1.webp')} alt='Profile'/>
        </div>
        <div className="col-lg-8 pt-4 pt-lg-0 content">
          <h3>React Developer &amp;</h3>
          <p className="fst-italic text-light" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <div className="row">
            <div className="col-lg-6 d-flex">
              <ul className="intro-detail">
                <li><i><ChevronRightIcon/></i> <strong>Birthday:</strong> <span>16 Feb 1999</span></li>
                <li><i><ChevronRightIcon/></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                <li><i><ChevronRightIcon/></i> <strong>Phone:</strong> <span> <a className="text-light" href="tel:+923497273482">+923497273482</a> </span></li>
                <li><i><ChevronRightIcon/></i> <strong>City:</strong> <span>New York, USA</span></li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="intro-detail">
                <li><i><ChevronRightIcon/></i> <strong>Age:</strong> <span>{age}</span></li>
                <li><i><ChevronRightIcon/></i> <strong>Field of Study:</strong> <span>BS(Software Engineering)</span></li>
                <li><i><ChevronRightIcon/></i> <strong>Email:</strong> <span><a href="mailto:bhallibhai69@gmail.com" rel="noopener noreferrer" target="_blank">bhallibhai69@gmail.com</a></span></li>
                <li><i><ChevronRightIcon/></i> <strong>Freelance:</strong> <span>Available</span></li>
              </ul>
            </div>
          </div>
          <p className="text-light">
            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </div>
      </div>
        </>
    );
}

export default Intro;