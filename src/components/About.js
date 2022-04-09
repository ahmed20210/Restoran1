import React , { useEffect } from "react";
import image1 from "../img/about-1.jpg";
import image2 from "../img/about-2.jpg";
import image3 from "../img/about-3.jpg";
import image4 from "../img/about-4.jpg";
import WOW from "wowjs";
import { MdRestaurant } from "react-icons/md";
function About() {
  useEffect(() => {
    
    new WOW.WOW({
      live: false,
    }).init();
  });
  return (
    <div id='about' className=' row justify-content-center my-5'>
      <div className='col-12 col-md-6 row justify-content-center'>
        <div className='col-6  row align-items-end wow scale-in-center'>
          <img src={image1} className='img-fluid w-100 rounded ' alt='...' />
        </div>
        <div className='col-6 row align-items-end wow scale-in-center'>
          <img src={image2} className='img-fluid w-75 rounded' alt='...' />
        </div>
        <div className='col-6 row align-items-start justify-content-end mt-3 wow scale-in-center'>
          <img src={image3} className='img-fluid  rounded w-75' alt='...' />
        </div>
        <div className='col-6 row align-items-start mt-3 wow scale-in-center'>
          <img src={image4} className='img-fluid rounded w-100' alt='...' />
        </div>
      </div>
      <div
        className='text-light col-10 col-md-5  '
        data-wow-duration='2s'
        data-wow-delay='5s'>
        <span className='after-effect font-pacifico'>About Us</span>
        <h2 className='h1 font-nunito'>
          Welcome to
          <MdRestaurant
            className='text-success mx-1'
            style={{ width: "40px", height: "40px" }}
          />
          Restoran
        </h2>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <span className='text-success fw-bold h1 before-number'>15</span>
            <span className='m-2'>
              Years of <p className='text-success '>EXPERIENCE</p>
            </span>
          </div>
          <div className='col-4'>
            <span className='text-success fw-bold h1 before-number'>50</span>
            <span className='m-2'>
              Popular <p className='text-success '>MASTER CHEFS</p>
            </span>
          </div>
        </div>
        <div className='row justify-content-center'>
          <button className='btn btn-success text-light col-3'>
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
