import React,{useCallback, useState} from 'react'
import ChildA from './ChildA'
function Usecallback() {
    const [ add, setadd]= useState(0)
    const [count,setcount]=useState(0)
    const learning = ' GGGGGG'
    
    // useCallback(()=>{

    // })
 
  return (
    <div>
    <h2>learning Usecallback</h2>
    <ChildA
     learning={learning} 
     count={count}/>
    <h1> add:{add}</h1>
    
    <button className='border bg-black text-white rounded-lg p-2' onClick={()=>setadd(add+1)}> Addition</button><br/>
    
    <button className='border bg-black text-white rounded-lg p-2' onClick={()=>setcount(count+2)}>count</button>
  </div>
  )
}

export default Usecallback
