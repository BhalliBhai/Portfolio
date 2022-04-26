import React from 'react';
import Counts from '../components/Counts';
import Interest from '../components/Interest';
import Intro from '../components/Intro';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Testimonial from '../components/Testimonial';



const About = () =>{
     return(
         <>

         <Navbar/>

         {/* About section */}
        
         {/* end about section */}
             {/* <div className=' mt-5 mx-5'> 
             <h1 className='text-light'> It's About Page</h1>
             </div> */}
            {/* -------------------------------------------- */}
               
            {/* <!-- ======= About Section ======= --> */}

  <section id="about" className="about mt-3">

    {/* <!-- ======= About Me ======= --> */}
    <div className="about-me container">
      <div className="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>
    </div>
    <Intro></Intro>
    {/* <!-- End About Me --> */}

    {/* <!-- ======= Counts ======= --> */}
       <Counts></Counts>
    {/* <!-- End Counts --> */}

    {/* <!-- ======= Skills  ======= --> */}
      <Skills/>
    {/* <!-- End Skills --> */}

    {/* <!-- ======= Interests ======= --> */}
          <Interest></Interest>
    {/* <!-- End Interests --> */}

    {/* <!-- ======= Testimonials ======= --> */}
         <Testimonial></Testimonial>
    {/* <!-- End Testimonials  --> */}

  </section>
  {/* <!-- End About Section --> */}

            

         </>
     );
};
export default About;