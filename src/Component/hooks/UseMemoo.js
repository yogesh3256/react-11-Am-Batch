import React,{useState,useMemo} from 'react'

function UseMemoo() {
    const [count,setcount]= useState(0)
    const [item,setitem]= useState(10)
    const multicount=useMemo( function multicount(){
      console.log("multicount")
  
      return count*5
    },[item]
      )
  return (
    <div>
      <h1>use memo hooks in react</h1>
      <h2>{multicount}</h2>
      <h2> count:{count}</h2>
      <button className='border' onClick={()=>setcount(count+1)}>update count</button><br/>
      <h2> item:{item}</h2>
      <button className='border' onClick={()=>setitem(item*2)}>item count</button>
    </div>
  )
}

export default UseMemoo
