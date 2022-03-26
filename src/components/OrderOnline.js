import React, { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import MenuList from "../context/menu";
import { shoppingCart } from "../App";
import { BsFillPlusCircleFill } from "react-icons/bs";
function OrderOnline() {
  const menuList = useContext(MenuList);
  const ShoppingCart = useContext(shoppingCart);
  const [List, setList] = useState(menuList);
  const handleClick = (el) => {
    const data = menuList.filter((e) => {
      return e.type === `${el}`;
    });
    setList(data);
  };
  const handleClick0 = () => {
    setList(menuList);
  };
  const handleAddCart = (e) => {
   
    if (e.orderOnline === false) {
      e.number = 1;
      e.orderOnline = true;
    } else {
      e.number++;
    }

    const data = ShoppingCart.cart.find(el => el.name === e.name)
      if(!data && e.orderOnline === true){
        
ShoppingCart.addcart([...ShoppingCart.cart, e]);
      } 
  }
  return (
    <div className='h-full'>
      <div className='text-white text-center my-3'>
        <h2 className='font-pacifico'>Order Menu</h2>
      </div>
      <Nav className='container' variant='pills' defaultActiveKey='AllItems'>
        <Nav.Item onClick={() => handleClick0()}>
          <Nav.Link className='text-success nav-style' eventKey='AllItems'>
            All items
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleClick("main dishes")}>
          <Nav.Link className='text-success nav-style' eventKey='MainDishes'>
            Main Dishes
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleClick("desert")}>
          <Nav.Link className='text-success nav-style' eventKey='Desert'>
            Desert
          </Nav.Link>
        </Nav.Item>
        <Nav.Item onClick={() => handleClick("drinks")}>
          <Nav.Link className='text-success nav-style' eventKey='Drinks'>
            Drinks
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className='row justify-conent-center m-3 text-light text-center'>
        {List.map((e, index) => (
          <div key={index} className='card col-5 col-md-3 col-lg-2 cart m-3'>
            <div class='card-body'>
              <div className='cart-img'>
                <img className='img-fluid' src={e.image} alt='' />
              </div>
              <h5 className='card-title'>{e.name}</h5>
              <p className='card-text'>{e.description}</p>
              <span>{`${e.price} $`}</span>
              <span className='ms-5'>
                <BsFillPlusCircleFill
                  onClick={() => handleAddCart(e)}
                  className='text-success'
                  style={{ width: "25px", height: "25px" }}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderOnline;
