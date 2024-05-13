import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const yogesh=useNavigate();
  return (
    <div>
      contact us<br/>
  <button onClick={()=>{yogesh('/')}}>back</button>
    </div>
  )
}

export default Contact
