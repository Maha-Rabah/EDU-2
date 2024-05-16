import React from 'react'
import './LandingStyle.css'
import { Link } from 'react-router-dom'

const Landing = ({data}) => {
  return (
    <div className='landing'>
        <div className="container">
            <h2 className='title'>{data.title}</h2>
            <p className='desc'>{data.desc}</p>
          <Link to="/about" className={(data.true)?'button':"none"}>{data.button}</Link>
        </div>
    </div>
  )
}

export default Landing