import React from 'react'
import Home from "./components/Home";
import Service from "./components/Service";
import About from "./components/About";
import Team from "./components/Team";
import Testimonial from './components/Testimonial';

function Main() {
  return (
    <div>
      <header className='bg-home'>
        <div className='bg-home-rgb'>
          <Home />
        </div>
      </header>
      <Service />
      <About />
      <Team />
      <Testimonial/>


    </div>
  );
}

export default Main