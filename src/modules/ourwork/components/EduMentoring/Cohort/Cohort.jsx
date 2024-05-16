import React from 'react'
import cohort from '../../../assets/cohort.png'
import './Cohort.css'
const Cohort = () => {
  return (
    <div>
        <div className="cohort">
            <div className="container">
                <div className="title">Our 2024 cohort</div>
                <img src={cohort} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cohort