import React from 'react'
import './footerStyle.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYoutube ,
} from 'react-icons/fa';
import { BsTelegram } from "react-icons/bs";
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'

/////////////////////////////////////////////////////////////
const email = 'info@edu-bridge.org.uk'
const socialData = [
  "",
  "",
  "",
  "",
]
/////////////////////////////////////////////////////////////
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">

        <div className="box">
            <img src={logo} alt="" />
            <a href={email}>{email}</a>

            <ul className='social'> 
              <Link to={"https://www.facebook.com/share/7BUHBUWxU951ac6Y/?mibextid=qi2Omg"}><FaFacebookF/></Link>
              <Link to={"https://www.instagram.com/edu.bridge.sy"}><FaInstagram/></Link>
              <Link to={"https://www.linkedin.com/company/edubridge2024"}><FaLinkedinIn/></Link>
              <Link to={"https://youtube.com/@edu.bridge.sy.?si=HpwWOaJPbz0mOrWI"}><FaYoutube /></Link>
              <Link to={"https://t.me/EduLens_Podcast"}><BsTelegram /></Link>
            </ul>
        </div>

        <ul className='column'>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li>
            <a href="">Programs</a>
            <ul className='drop'>
              <li>EduMentoring</li>
              <li>EduLens</li>
              <li>EduCounselling</li>
            </ul>
          </li>
          <li><a href="">Join US</a></li>
          <li><a href="">Contuct Us</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer