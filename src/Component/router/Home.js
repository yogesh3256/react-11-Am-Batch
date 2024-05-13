import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location=useLocation();
    console.log(location);
  return (
    <div>
        <p>{location.state}</p>
      Home
    </div>
  )
}

export default Home
