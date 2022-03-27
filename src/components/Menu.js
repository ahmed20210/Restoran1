import React, { useContext, useState } from "react";
import { FaCoffee, FaHamburger } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import MenuList from "../context/menu";
function Menu() {
    const menuList = useContext(MenuList)
    const breakfast = menuList.filter(e => {
        return e.mealTime ==='breakfast'
    });
    const [List , setList] = useState(breakfast)
    const handleClick = (el) => {
      const data = menuList.filter((e) => {
        return e.mealTime === `${el}`;
      });
      setList(data)
    }
  return (
    <div className='text-light text-center my-5'>
      <div>
        <span className='before-effect after-effect font-pacifico'>
          FOOD MENU
        </span>
        <h3 className='font-nunito'>Most Popular Items</h3>
      </div>
      <div className='pading'>
        <div
          id='carouselExampleDark'
          className='carousel slide carousel-fade'
          data-bs-ride='carousel'
          data-bs-interval='false'>
          <div className='carousel-indicators carousel-style'>
            <button
              type='button'
              onClick={() => handleClick("breakfast")}
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
              value={1}>
              <FaCoffee
                className='col-6 text-success'
                style={{ width: "60px", height: "40px" }}
              />
              <div className='col-6'>
                Popular
                <br /> <span className='fw-bold fs-6'>Breakfast</span>
              </div>
            </button>
            <button
              type='button'
              onClick={() => handleClick("launch")}
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='1'
              aria-label='Slide 2'>
              <FaHamburger
                className='col-6 text-success'
                style={{ width: "60px", height: "40px" }}
              />
              <div className='col-6'>
                Special
                <br /> <span className='fw-bold fs-6'>Launch</span>
              </div>
            </button>
            <button
              type='button'
              onClick={() => handleClick("dinner")}
              data-bs-target='#carouselExampleDark'
              data-bs-slide-to='2'
              aria-label='Slide 3'>
              <MdDinnerDining
                className=' col-6 text-success'
                style={{ width: "60px", height: "40px" }}
              />
              <div className='col-6'>
                Lovely
                <br />
                <span className='fw-bold fs-6'>Dinner</span>
              </div>
            </button>
          </div>
          <div className='carousel-inner'>
            <div className='carousel-item active '>
              <div className='row justify-conent-ariund m-0 m-md-3 text-light text-center'>
                {List.map((e, index) => (
                  <div
                    key={index}
                    className='card col-5 col-md-3 col-lg-2 cart m-2 m-lg-3'>
                    <div className='card-body'>
                      <div className='cart-img'>
                        <img className='img-fluid' src={e.image} alt='' />
                      </div>
                      <h5 className='white-space fs-6 card-title'>{e.name}</h5>
                      <p className='card-text'>{e.description}</p>
                      <span>{`${e.price} $`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row justify-conent-ariund m-0 m-md-3 text-light text-center'>
                {List.map((e, index) => (
                  <div
                    key={index}
                    className='card col-5 col-md-3 col-lg-2 cart m-2 m-lg-3'>
                    <div className='card-body'>
                      <div className='cart-img'>
                        <img className='img-fluid' src={e.image} alt='' />
                      </div>
                      <h5 className='white-space fs-6 card-title'>{e.name}</h5>
                      <p className='card-text'>{e.description}</p>
                      <span>{`${e.price} $`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='carousel-item'>
              <div className='row justify-conent-ariund m-0 m-md-3 text-light text-center'>
                {List.map((e, index) => (
                  <div
                    key={index}
                    className='card col-5 col-md-3 col-lg-2 cart m-2 m-lg-3'>
                    <div className='card-body'>
                      <div className='cart-img'>
                        <img className='img-fluid' src={e.image} alt='' />
                      </div>
                      <h5 className='white-space fs-6 card-title'>{e.name}</h5>
                      <p className='card-text'>{e.description}</p>
                      <span>{`${e.price} $`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
