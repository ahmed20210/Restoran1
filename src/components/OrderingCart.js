import React, { useContext, useState } from "react";
import { shoppingCart } from "../App";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoMdRemoveCircle } from "react-icons/io";
function OrderingCart() {
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [locationv, setLocationv] = useState("");
  const [none, setnone] = useState("d-none");
  const [none1, setnone1] = useState("d-none");
  const [none2, setnone2] = useState("d-none");
  const ShoppingCart = useContext(shoppingCart);
  const handleAddCart = (e) => {
    e.number++;
    ShoppingCart.addcart([...ShoppingCart.cart]);
  };
  const handleRemoveCart = (e) => {
    if (e.number > 1) {
      e.number = e.number - 1;
    } else {
      e.orderOnline = false;
    }
    const cart = ShoppingCart.cart.filter((el) => el.orderOnline === true);
    ShoppingCart.addcart([...cart]);
  };
  const price = ShoppingCart.cart.map((el) => el.number * el.price);
  let x;
  if (price.length > 0) {
    const TotalPrice = price.reduce((total, num) => {
      return total + num;
    });
    x = TotalPrice;
  }
  const handleOrder = () => {
    if (ShoppingCart.cart.length === 0) {
      setnone1("");
      setTimeout(() => {
        setnone1("d-none");
      }, 5000);
    } else if (number.length < 5 && location.length < 5) {
      setnone2("");
      setTimeout(() => {
        setnone2("d-none");
      }, 5000);
    } else if (
      ShoppingCart.cart.length > 0 &&
      number.length > 5 &&
      location.length > 5
    ) {
      setLocationv(location);
      setnone("");
      setTimeout(() => {
        setnone("d-none");
      }, 5000);
      ShoppingCart.cart.map((e) => {
        e.number = 0;
        e.OrderOnline = false;
        return e;
      });
      ShoppingCart.addcart([]);
      setNumber("");
      setLocation("");
      setTimeout(() => {
        setnone("d-none");
        setnone1("d-none");
      }, 5000);
    }
  };
  return (
    <div className='h-full text-center'>
      <div className='row justify-conent-center m-3 text-light text-center'>
        {ShoppingCart.cart.length === 0 ? (
          <h2>Your order list is empty</h2>
        ) : (
          ShoppingCart.cart.map((e, index) => (
            <div key={index} className='card col-5 col-md-3 col-lg-2 cart m-3'>
              <div class='card-body'>
                <div className='cart-img'>
                  <img className='img-fluid' src={e.image} alt='' />
                </div>
                <span className=' justify-content-center'>
                  <BsFillPlusCircleFill
                    onClick={() => handleAddCart(e)}
                    className='text-success mx-2'
                    style={{ width: "25px", height: "25px" }}
                  />
                  <span>{e.number}</span>
                  <IoMdRemoveCircle
                    className='text-success mx-2'
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => handleRemoveCart(e)}
                  />
                </span>
                <h5 className='card-title'>{e.name}</h5>
                <div className=' row justify-content-center'>
                  <span>
                    Price<span className='text-success'>{` ${e.price} $`}</span>
                  </span>
                  <br />
                  <span>
                    Total Price
                    <span className='text-success'>{`${
                      e.price * e.number
                    } $`}</span>
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className={`row justify-content-center my-3 ${none2}`}>
        <div class='alert alert-danger col-6' role='alert'>
          You must enter 5 letter and 5 number at least
        </div>
      </div>
      <div className='row justify-content-center text-light'>
        <div className='card text-center cart rounded-2 col-10 col-md-8 col-lg-6 p-0'>
          <div className='card-body'>
            <div className='row'>
              <h5 className='card-title my-3 font-nunito'>
                Complete Your Order
              </h5>
              <div className='row justify-content-center'>
                <div className='mb-3 col-10 col-md-8 col-lg-4'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput'
                    placeholder='ENTER YOUR NUMBER'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className='mb-3 col-10 col-md-8 col-lg-4'>
                  <input
                    type='text'
                    className='form-control'
                    id='formGroupExampleInput2'
                    placeholder='Enter YOUR LOCATION'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <h5 className='card-title'>
                Total price <span className='text-success'>{x ? x : 0} </span>$
              </h5>
              <button
                type='submit'
                className='btn btn-success text-light'
                onClick={(el) => handleOrder(el)}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`row justify-content-center my-3 ${none}`}>
        <div class='alert alert-success col-6' role='alert'>
          Your order on the way to {locationv}
        </div>
      </div>
      <div className={`row justify-content-center my-3 ${none1}`}>
        <div class='alert alert-warning col-6' role='alert'>
          You should add 1 Order at least to list
        </div>
      </div>
    </div>
  );
}

export default OrderingCart;
