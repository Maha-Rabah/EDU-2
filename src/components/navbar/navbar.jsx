import React from 'react'
import './navbarStyle.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="" />
        </Link>
        <i className='toggle'><IoIosMenu/></i>
        <ul className='nav-list'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="about">About</NavLink></li>
          <li>
            <NavLink to="edumentoring">Our Work</NavLink>
            <ul className='dropdown'>
              <li><NavLink to="edumentoring">EduMentoring Program</NavLink></li>
              <li><NavLink to="edulens">EduLens Program</NavLink></li>
              <li><NavLink to="educounseling">EduCounseling Program</NavLink></li>
            </ul>
          </li>
          <li><NavLink to="joinus">Join Us</NavLink></li>
          <li><NavLink to="contuct">Contuct Us</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar