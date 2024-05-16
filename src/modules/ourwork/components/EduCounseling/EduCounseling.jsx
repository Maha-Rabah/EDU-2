import './eduCounseling.css'
import React from 'react'
import Landing from '../../../main/components/landing/Landing'
import { useState } from 'react'
import Numbers from '../../../main/components/Numbers/Numbers'
import Features from '../Features/Features'
import feat1 from '../../assets/yellfeat1.svg'
import feat2 from '../../assets/yfeat2.svg'
import feat3 from '../../assets/yfeat3.svg'

const EduCounseling = () => {


  const coundata={
    title:'EduCounseling program',
    desc:'A Counseling program for individuals currently applying for scholarships and seeking assistance in assessing their application files or preparing for scholarship interviews.',
    true:false,
  }

  
  /////////////////////////////////////////////////
  
  const numoption = ["In Progress"];
  const contitle =['EduCounseling in Numbers']
  
  ////////////////////////////////////////////////////
  const featuredata=[
    {
  pink:true,
  icon:feat1,
  titlefeature:'Essay Review',
  caption:'Expert help in refining application essays for scholarship submissions.',
    },

    {
    pink:true,
    icon:feat2,
    titlefeature:'Interview Prep',
    caption:'Conducting mock interviews to prepare candidates for scholarship interviews.',
      },

      {
    pink:true,
    icon:feat3,
    titlefeature:'Counseling Session',
    caption:'A 30-minute video session designed to assist you on your scholarship journey.',
        },
        
  ]
  return (
    <>
        <Landing data={coundata}/>
         <Features featurecard={featuredata}/>
        <Numbers  title={contitle} numoptions={numoption}/>
    </>
  )
}

export default EduCounseling