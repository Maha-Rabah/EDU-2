import React from 'react'
import './eduMentoring.css'
import { useState } from 'react'
import Landing from '../../../main/components/landing/Landing.jsx'
import Numbers from '../../../main/components/Numbers/Numbers.jsx'
import Cohort from './Cohort/Cohort.jsx'
import Features from '../Features/Features.jsx'
import feat1 from '../../assets/feature1.svg'
import feat2 from '../../assets/feature2.svg'
import feat3 from '../../assets/feature3.svg'
import mentpic from '../../assets/mentopic.png'
import yellow from '../../../../assets/yellow.svg'


const EduMentoring = () => {
  
  const mendata={
    homepic:mentpic,
    title:'EduMentoring program',
    desc:'A mentoring program to support Syrian students in their pursuit of higher education abroad through mentoring and financial support.'
  }

   ////////////////////////////////////////////////////////////////
    const mentoption = ["+ 200 Applicants", "+ 45 interviews"
   ," 18 Mentees", "6 Mentors"];
    const mentonumtitle= "EduMentoring in Numbers";
   //////////////////////////////////////////////////////////////////

const featuredata=[
  {
icon:feat3,
titlefeature:'Bi-weekly Sessions with Mentors',
caption:'Bi-weekly mentoring sessions to secure scholarships with expert mentors.',
  },
  {
  icon:feat2,
  titlefeature:'IELTS/TOEFL Funding',
  caption:'Funding IELTS/TOEFL fees to eliminate financial barriers for students.',
    },
    {
  icon:feat1,
  titlefeature:'Monthly Speaker Session',
  caption:'Organize monthly speaker sessions during the program to share experiences with mentees.',
      },
      
]
  
  return (
    <div >
      <Landing data={mendata}/>
      <Features featurecard={featuredata} featuretit={true}/>
      <img src={yellow} alt="" className='proyellow' />
      <Numbers  title={mentonumtitle} numoptions={mentoption}/>
      <Cohort/>


    </div>
  )
}

export default EduMentoring

