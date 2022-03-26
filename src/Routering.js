import React from 'react'
import { BrowserRouter ,Route,Routes , Link } from "react-router-dom";
import Main from './main';
import Menu from "./components/Menu";
import OrderOnline from "./components/OrderOnline";
import BookTable from "./components/BookTable";
import NavBar from './components/NavBar';
import { HiClipboardList} from 'react-icons/hi'
import OrderingCart from './components/OrderingCart'
import Footer from './components/Footer';
function Routering() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
          <Link
            to='/cart'
            className='btn btn-success position-fixed'
            style={{
              borderRadius: "100px",
              top: "80px",
              zIndex: "20",
              right: "10px",
            }}>
            <HiClipboardList className='text-light' />
          </Link>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/OrderOnline' element={<OrderOnline />} />
          <Route path='/book-table' element={<BookTable />} />
          <Route path='/cart' element={<OrderingCart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default Routering