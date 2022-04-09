import React, { useEffect} from "react";
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import image1 from '../img/team-1.jpg'
import image2 from "../img/team-2.jpg";
import image3 from "../img/team-3.jpg";
import image4 from "../img/team-4.jpg";
import WOW from 'wowjs';
function Team() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  });
    const team = [
        {
        name:'John Doe',
        img: image1,
    }, 
    {
        name:'James David',
        img: image2,
    },
    {
        name:'Henry Thomas',
        img: image3,
    },
    {
        name:'Daniel Joseph',
        img: image4,
    }

]
  return (
    <div id='our-team' className='text-center my-5'>
      <div className='text-white text-center wow slide-in-top'>
        <span className='before-effect after-effect font-pacifico'>
          Team Members
        </span>
        <h2 className='font-nunito'>Our Master Chef</h2>
      </div>
      <div className='row m-5 justify-content-center'>
        {team.map((e, index) => (
          <div
            key={index}
            class='card col-8 col-md-5 team rounded text-center rounded-5 text-light wow slide-in-bottom'>
            <div class='card-body'>
              <div className='card-img'>
                <img className='img-fluid' src={e.img} alt='' />
              </div>
              <h5 class='card-title pt-3'>{e.name}</h5>
              <p className='p-2'>Designation</p>
              <div className='card-icon'>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <BsTwitter />
                </span>
                <span>
                  <AiFillInstagram />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
