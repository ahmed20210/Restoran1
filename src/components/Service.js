import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { IoRestaurantSharp } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";
import { RiCustomerServiceFill } from "react-icons/ri";
export default function Service() {
  return (
    <div
      id='service'
      className='p-5 bg-dark row justify-content-center service my-5'>
      <div className='text-white text-center my-3'>
        <span className='before-effect after-effect font-pacifico'>
          Our Services
        </span>
        <h2 className='font-nunito'>Explore Our Services</h2>
      </div>
      <div className='card card-bg text-white m-2 col-11 col-sm-5 col-md-5 col-lg .card-hover'>
        <div className='card-body'>
          <SiCodechef
            className='text-success my-3 '
            style={{ height: "50px", width: "50px" }}
          />
          <h5 className='card-title'>Master Chefs</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className='card card-bg text-white m-2 col-11 col-sm-5 col-md-5 col-lg '>
        <div className='card-body'>
          <IoRestaurantSharp
            className='text-success my-3'
            style={{ height: "50px", width: "50px" }}
          />
          <h5 className='card-title'>Quality Food</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className='card card-bg text-white m-2 col-11 col-sm-5 col-md-5 col-lg '>
        <div className='card-body'>
          <FaCartPlus
            className='text-success my-3'
            style={{ height: "050px", width: "50px" }}
          />
          <h5 className='card-title'>Online Order</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
      <div className='card card-bg text-white m-2 col-11 col-sm-5 col-md-5 col-lg '>
        <div className='card-body'>
          <RiCustomerServiceFill
            className='text-success my-3'
            style={{ height: "050px", width: "50px" }}
          />
          <h5 className='card-title'>24/7 Service</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
