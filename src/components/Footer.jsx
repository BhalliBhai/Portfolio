import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';


  


const Footer = () =>{
    let newDate = new Date()
    // let date = newDate.getDate();
    // let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
     
return(
    <>
         <div className="credits">
   <p> 
   <CopyrightIcon className='copyright pb-1'></CopyrightIcon> 
     { year } | Powered by <a href="mailto:bhallibhai69@gmail.com" rel="noopener noreferrer" target="_blank">Bhalli Bhai</a> 
   </p>
  </div>
    </>
);
}
export default Footer;