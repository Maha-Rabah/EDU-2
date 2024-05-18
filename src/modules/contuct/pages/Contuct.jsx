import './contuct.css'
import worldmap from '../assets/worldmapfinal.png'
import { useState,useEffect } from 'react'
import line from '../assets/lines.svg'
import sy from '../assets/syria.svg'
import yellow from '../../../assets/yellow.svg'
import roze from '../../../assets/roze.svg'
import dot from '../assets/dot.svg'

const Contuct= () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')
  const[success,setSuccess]=useState('')

  function messagesent(){
    setSuccess(()=>{
      return alert("Your Message Sent Successfully, Thank you!")
      
    })
  }

const handleFormSubmit = (e) =>{
    e.preventDefault();
    const dataToSubmit ={
      firstName,
      lastName,
      email,
      message
    }
    fetch('https://api.edu-bridge.org.uk/contact-us' , {
      method:'POST',
      headers:{
         'accept':'*/*' ,
         'Content-Type':'application/json' 
      },
      body:JSON.stringify(dataToSubmit)
    }).then(res => res.json())
    .then(res =>{
        alert('Successful!')
    })
}
  return (
    <div className="contactUs-container">
    <img src={yellow} alt="" className='yellowcon'/>
        <div className="worldMap">
            <img className="map" src={worldmap} alt="" />
            <img className='line' src={line} />
            <img className='syria' src={sy} alt="" />
            <img className='dot1' src={dot} alt="" />
            <img className='dot2' src={dot} alt="" />
            <img className='dot3' src={dot} alt="" />
            <img className='dot4' src={dot} alt="" />
            <img className='dot5' src={dot} alt="" />
            <img className='dot6' src={dot} alt="" />
        </div>
        <form method="post" action="#" className='form-container' onSubmit={handleFormSubmit}>
            <input type="text"   name="text"   value={firstName} onChange={(e)=>
            setFirstName(e.target.value)}
             placeholder='First Name (required)'  required/>

            <input type="text"   name="text"   value={lastName}  onChange={(e)=>
            setLastName(e.target.value)}
            placeholder='Last Name (required)' required/>

            <input type="email"  name="email"  value={email}  onChange={(e)=>
            setEmail(e.target.value)} placeholder='Email (required)' required />

            <textarea type='text'   name="text"   value={message} onChange={(e)=>
            setMessage(e.target.value)} placeholder='Message (required)' required />

            <input type="submit" name="submit" id="" value="Send"
             onClick={()=>messagesent()}/>
        </form>
    <img src={roze} alt="" className='rozecon'/>
      
    </div>
  )
}  

export default Contuct