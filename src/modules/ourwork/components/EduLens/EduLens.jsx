import React from 'react'
import './eduLens.css'
import Landing from '../../../main/components/landing/Landing'
import Numbers from '../../../main/components/Numbers/Numbers'
import Educard from './educard/Educard'
import lenspic from '../../assets/Edulenspic.png'
import yellow from '../../../../assets/yellow.svg'
const EduLens = () => {

  const lensdata={
    homepic:lenspic,
    title:'EduLens Program',
    desc:'A mentoring program to support Syrian students in their pursuit of higher education abroad through ourwork and financial support.',
    true:false
  }
///////////////////////////////////////////////////////////

const lensnumtitle='EduLens in Numbers';
const numoption = ["+ 11 Episodes", "+ 11 Hours of Content"];

  return (

    <>
        <Landing data={lensdata}/>
        <Educard/>
        <img src={yellow} alt="" className='proyellow' />
        <Numbers  title={lensnumtitle} numoptions={numoption}/>

      
    </> 
  )
}

export default EduLens