import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'
import yellow from '../../../../assets/yellow.svg'


const Features = ({featurecard,featuretit}) => {
    return (
      <div className='features'>
          <h2 className={(featuretit)?'feattitle featblue':'feattitle featyellow'}>Features</h2>
          <div className="container">
          {featurecard.map(function (item) {
                  return (
                    <>
                        <Link to={item.counlink} className={(item.pink)?"featurecard pink":"featurecard"}>
                        <div className='icon'>
                          <img src={item.icon} alt="" />
                        </div>
                        <h3 className='featuretit'>{item.titlefeature}</h3>
                        <div className='caption'>
                          <p>{item.caption}</p>
                        </div>
                    </Link>
                    </>
                  );
              })}
      <img src={yellow} alt="" className='proyellow' />

          </div>
      </div>
    )
  }
  
export default Features