import React from 'react'
import './joinUs.css'
import notebook from '../assets/notebook.svg'
import linkedin from '../assets/linkedin.svg'
// import Job from '../components/Jobs/Job.jsx'
import Values from '../../about/components/Values/Values.jsx'
import icon1 from '../assets/jicon1.svg'
import icon2 from '../assets/jicon2.svg'
import icon3 from '../assets/jicon3.svg'
import people from '../assets/vol.png'

/////////////////////////////////////////////////////////
const valuedata=[{
    icon:icon1,
    caption:"Develop your skills",
  },
  {
    icon:icon2,
    caption:"Contribute to a sustainable impact",
  },
  {
    icon:icon3,
    caption:"Create global connections",
  },]
////////////////////////////////////////////////

const JoinUs = () => {
  return (
    <div className='joinUs-container container'>
        <div className="jointitle">
            <h1>Join us in shaping a brighter future for Syria</h1>
        </div>
        <div className="joinUs-op-container">
            
            <img src={notebook} alt="" /> 
                
            <div className="joinUs-op-content">
                <h3>Volunteer opportunities</h3>
                <p>Join our team of diverse, passionate people and foster a culture that empowers you to do your best work, for a better brighter future for Syria.</p>
            </div>
            {/* <Job />            
            <Job />             */}

            <div className='joinbox'>
              <p>No available opportunities</p>
            </div>
            
            <div className="cta-linkedin">
                <a href="https://www.linkedin.com/company/edubridge2024" alt="linked in button">
                    <img src={linkedin} alt="linked in logo" /><span>Follow us on Linkedin</span>
                </a>
            </div>
        </div>

    <div className="people-container">
        <img src={people} alt="" />
    </div>

    <a href="" className='button'>Volunteer with EduBridge</a>

    <div className="volunteer-container">
        <h2>Why volunteer with us</h2>
        <Values valuecard={valuedata}/>
    </div>

    </div>
  )
}

export default JoinUs