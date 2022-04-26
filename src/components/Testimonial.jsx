import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Testimonial = () => {
    return(
        <>
            <div className="testimonials container">

<div className="section-title">
  <h2>Testimonials</h2>
</div>





<div className="testimonials-slider row justify-content-center" >
  <Carousel autoPlay="true" infiniteLoop CarouselControl="false" CarouselControls="0">

    <div className="swiper-slide col-11 mx-auto">
      <div className="testimonial-item">
        <p className="text-light">
          <span className=" quote-icon-left">"</span>
          Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
          <span className="quote-icon-right">"</span>
        </p>
        <img src={require('../img/testimonials/testimonials-1.jpg')} className="testimonial-img mx-auto" alt=""/>
        <h3 className="mx-auto">Saul Goodman</h3>
        <h4 className="mx-auto">Ceo &amp; Founder</h4>
      </div>
    </div>
    {/* <!-- End testimonial item --> */}

    <div className="swiper-slide col-11 mx-auto">
      <div className="testimonial-item">
        <p className="text-light">
        <span className=" quote-icon-left">"</span>
          Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
          <span className="quote-icon-right">"</span>
        </p>
        <img src={require('../img/testimonials/testimonials-2.jpg')} className="testimonial-img mx-auto" alt=""/>
        <h3 className="mx-auto">Sara Wilsson</h3>
        <h4 className="mx-auto">Designer</h4>
      </div>
    </div>
    {/* <!-- End testimonial item --> */}

    <div className="swiper-slide col-11 mx-auto">
      <div className="testimonial-item">
        <p className="text-light">
        <span className=" quote-icon-left">"</span>
          Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
          <span className="quote-icon-right">"</span>
        </p>
        <img src={require('../img/testimonials/testimonials-3.jpg')} className="testimonial-img mx-auto" alt=""/>
        <h3 className="mx-auto">Jena Karlis</h3>
        <h4 className="mx-auto">Store Owner</h4>
      </div>
    </div>
    {/* <!-- End testimonial item --> */}

    <div className="swiper-slide col-11 mx-auto">
      <div className="testimonial-item">
        <p className="text-light">
        <span className=" quote-icon-left">"</span>
          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
          <span className="quote-icon-right">"</span>
        </p>
        <img src={require('../img/testimonials/testimonials-4.jpg')} className="testimonial-img mx-auto" alt=""/>
        <h3 className="mx-auto">Matt Brandon</h3>
        <h4 className="mx-auto">Freelancer</h4>
      </div>
    </div>
    {/* <!-- End testimonial item --> */}

    <div className="swiper-slide col-11 mx-auto">
      <div className="testimonial-item">
        <p className="text-light">
        <span className=" quote-icon-left">"</span>
          Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
          <span className="quote-icon-right">"</span>
        </p>
        <img src={require('../img/testimonials/testimonials-5.jpg')} className="testimonial-img mx-auto" alt=""/>
        <h3 className="mx-auto">John Larson</h3>
        <h4 className="mx-auto">Entrepreneur</h4>
      </div>
    </div>
    {/* <!-- End testimonial item --> */}

  </Carousel>
  <div className="swiper-pagination"></div>
</div>

{/* <div className="owl-carousel testimonials-carousel">

</div> */}

</div>
        </>
    );
}
export default Testimonial;