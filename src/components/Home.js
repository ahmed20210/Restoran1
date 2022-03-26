import React from 'react';
import { Row} from 'react-bootstrap'
import image from '../img/hero.png'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
      <div id='home' className='container text-light pb-5 '>
        <Row className='justify-content-center align-items-center'>
          <div className='col-11 col-lg-6 text-centers'>
            <h1 className='display-3 font-nunito'>
              Enjoy Our <br />
              Delicious Meal
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              qui officiis voluptatem tempore quas at voluptatibus culpa animi
              quos optio, laborum voluptas aspernatur voluptate fugiat totam in
              a iusto accusantium!
            </p>
           <Link className='btn-success btn text-white mx-1 ' to='/book-table'>
              BOOK A TABLE
            </Link>
            <Link className='btn-success btn text-white mx-1' to='/OrderOnline'>
              ORDER ONLINE
            </Link>
          </div>
          <div className='col-10 col-lg-6 my-5'>
            <img className='img-fluid App-logo' src={image} alt='' />
          </div>
        </Row>
      </div>
    );
}

export default Home;
