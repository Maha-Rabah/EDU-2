import React from 'react'
import './Features.css'

const Features = ({featurecard}) => {
    return (
      <div className='features'>
          <h2 className='title'>Features</h2>
          <div className="container">
          {featurecard.map(function (item) {
                  return (
                    <>
                        <div className={(item.pink)?"featurecard pink":"featurecard"}>
                        <div className='icon'>
                          <img src={item.icon} alt="" />
                        </div>
                        <h3 className='featuretit'>{item.titlefeature}</h3>
                        <div className='caption'>
                          <p>{item.caption}</p>
                        </div>
                    </div>
                    </>
                  );
              })}
          </div>
      </div>
    )
  }
  
export default Features