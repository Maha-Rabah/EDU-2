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
    desc:'A series of podcast episodes featuring the Syrian experience in scholarships abroad and documenting their international education journey.',
    true:false
  }
///////////////////////////////////////////////////////////

const lensnumtitle='EduLens in Numbers';
const numoption = ["+ 11 Episodes", "+ 11 Hours of Content"];

  return (

    <>
        <Landing data={lensdata}/>
        <Educard/>
        <Numbers  title={lensnumtitle} numoptions={numoption}/>

      
    </> 
  )
}

export default EduLens