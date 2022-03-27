import React from "react";
import {ImFacebook} from 'react-icons/im'
import { BsTwitter } from "react-icons/bs";
import { FaGithub, FaTelegramPlane } from "react-icons/fa";
import { AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { IoLocationSharp  } from "react-icons/io5";
import { IoIosArrowForward } from 'react-icons/io'
import { HiMail } from "react-icons/hi";

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='px-5 py-3'>
          <div className='text-light row justify-content-evenly'>
            <div className='col-5 col-lg-2'>
              <h3 className='font-pacifico'>Company</h3>
              <div>
                <p>
                  <IoIosArrowForward className='text-success' />
                  About Us
                </p>
                <p>
                  <IoIosArrowForward className='text-success' />
                  Contact Us
                </p>
                <p>
                  <IoIosArrowForward className='text-success' />
                  Reservation
                </p>
                <p>
                  <IoIosArrowForward className='text-success' />
                  Privacy Policy
                </p>
                <p>
                  <IoIosArrowForward className='text-success' />
                  Terms Condition
                </p>
              </div>
            </div>
            <div className='col-5 col-lg-2'>
              <div>
                <h3 className='font-pacifico'>Contact</h3>
                <p className='white-space'>
                  <IoLocationSharp className='me-2 text-success' />
                  11 Street, Tanta, Egypt
                </p>
                <p className='white-space'>
                  <AiFillPhone className='me-2 text-success' />
                  +2011 4478 1238
                </p>
                <p className='white-space'>
                  <HiMail className='me-2 text-success' />
                  Ahmdmsty345@gmail.com
                </p>
                <p className='icon-style'>
                  <span>
                    <ImFacebook />
                  </span>
                  <span>
                    <BsTwitter />
                  </span>
                  <span>
                    <FaGithub />
                  </span>
                  <span>
                    <AiFillLinkedin />
                  </span>
                </p>
              </div>
            </div>
            <div className='col-5 col-lg-2'>
              <h3 className='font-pacifico'>Opening</h3>
              <div>
                <p>Monday - Saturday</p>
                <p>09AM - 09PM</p>
              </div>
              <div className='col-5 col-lg-2'>
                <p>Sunday</p>
                <p>Sunday</p>
              </div>
            </div>
            <div className='col-5 col-lg-2'>
              <h3 className='font-pacifico'>Newsletter</h3>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div className='position-relative mx-auto '>
                <input
                  className='form-control border-success w-100 py-2 pb-3 ps-2 pe-3'
                  type='text'
                  placeholder='Your email'
                />
                <button
                  type='button'
                  className='btn btn-success text-light py-1 position-absolute top-0 end-0 mt-2 me-2'>
                  <FaTelegramPlane/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 className='text-light text-center py-1 bg-success mb-0'>
        Copyright © 2022 Restoran is powered by Sharabash
      </h5>
    </>
  );
}

export default Footer;
