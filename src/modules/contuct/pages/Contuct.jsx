import './contuct.css'
import worldmap from '../assets/worldmapfinal.png'
import { useState } from 'react'

const Contuct= () => {

  const[firstname,setFirstname]=useState('')
  const[lastname,setLastname]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')



const handleFormSubmit = (e) =>{
    e.preventDefault();
    const dataToSubmit ={
      firstname,
      lastname,
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
        <div className="worldMap">
          <img src={worldmap} alt="" />
        </div>
        <form method="post" action="#" className='form-container' onSubmit={handleFormSubmit}>
            <input type="text"   name="text"   value={firstname} onChange={(e)=>
            setFirstname(e.target.value)}
             placeholder='First Name (required)'  required/>

            <input type="text"   name="text"   value={lastname}  onChange={(e)=>
            setLastname(e.target.value)}
            placeholder='Last Name (required)' required/>

            <input type="email"  name="email"  value={email}  onChange={(e)=>
            setEmail(e.target.value)} placeholder='Email (required)' required />

            <input type='text'   name="text"   value={message} onChange={(e)=>
            setMessage(e.target.value)} placeholder='Message (required)' required />

            <input type="submit" name="submit" id="" value="Send"/>
        </form>

    </div>
  )
}  

export default Contuct