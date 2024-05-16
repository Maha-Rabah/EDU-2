import React from 'react'
import vision from '../../assets/vision.png';
import './visionStyle.css'
import roze from '../../../../assets/roze.svg'
import dashed from '../../assets/Ellipse 55.png'

const title=['Our Vision and Mission'];
const descvision= ['We envision a generation of Syrian youth empowered to overcome challenges and become key contributors in shaping a brighter future for Syria and the world. We facilitate access to international educationfor Syrian youth by harnessing the support of the Syrian diaspora'];

const Vision = () => {
  return (
    <div className='vision'>
        <div className="container">
            <div className="info">
                <h2 className='title'>{title}</h2>
                <p className='desc'>{descvision}</p>
              
            </div>
            <div className="image">
                <img className="dashed" src={dashed} alt="" />
                <img src={vision} alt="" />
            </div>
        </div>
      <img src={roze} alt="" className='roze2' />

    </div>
  )
}

export default Vision