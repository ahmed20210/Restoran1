import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { MdRestaurant } from "react-icons/md";
import { NavLink, Link, useLocation } from "react-router-dom";
export default function NavBar() {
  let location = useLocation();
  return (
    <div>
      <Navbar
        sticky='top'
        className='py-lg-0  navigation px-3 fw-bolder'
        expand='lg'>
        <Navbar.Brand className='text-success fs-1 py-0' href='#home'>
          <MdRestaurant /> <span className='font-nunito'>Restoran</span>
        </Navbar.Brand>
        <Navbar.Toggle
          className='bg-success'
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto text-light'>
            <NavLink className='text-white nav-link ' to='/'>
              HOME
            </NavLink>
            <NavLink className='text-white nav-link' to='/menu'>
              MENU
            </NavLink>
            <NavLink className='text-white nav-link' to='/OrderOnline'>
              ORDER ONLINE
            </NavLink>
            <NavDropdown
              className={location.pathname === "/" ? "" : "disabled"}
              title='SECTIONS'
              id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#service'>SERVICE</NavDropdown.Item>
              <NavDropdown.Item href='#about'>ABOUT</NavDropdown.Item>
              <NavDropdown.Item href='#our-team'>OUR TEAM</NavDropdown.Item>
              <NavDropdown.Item href='#testimonials'>
                TESTIMONIALS
              </NavDropdown.Item>
            </NavDropdown>
            <Link className='btn btn-success text-light px-4' to='/book-table'>
              BOOK A TABLE
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
