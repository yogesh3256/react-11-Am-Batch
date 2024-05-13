import React, { useState } from 'react';
import { useRef } from 'react';

function Useref() {
    const refElement=useRef("");
    const [name,setname]=useState("yogesh")
    console.log(refElement);
    function reset(){
        setname("")
        refElement.current.focus()
    }
    function handleInput(){
        refElement.current.style.color="red"
        refElement.current.value= "shubham"
         
    }
  return (
    <div>
        <h1>learning Useref</h1>
        <input className='border' ref={refElement} type='text'value={name} onChange={(e)=>setname(e.target.value)}/>
        <button onClick={reset}>reset</button>
        <button onClick={handleInput}>HamdleClick</button>
    </div>
  )
}

export default Useref
