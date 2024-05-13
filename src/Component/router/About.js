 
import React from 'react'
import {   useNavigate   } from 'react-router-dom'

function About() {
    const navigate = useNavigate();
    const data="Yogesh"

    return (
        <>
            <div>
                About! <br />
                <button onClick={() => { navigate('/contact' , {state:data}) }}> back</button>
            </div>


        </>
    )
}

export default About
