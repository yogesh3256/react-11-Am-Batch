import { memo } from "react";
import React from 'react'

function ChildA(yogesh ) {
    console.log("child component");
  return (
    <div>
        <h1>{ yogesh.learning}</h1>
        <h1>{ yogesh.count}</h1>
    </div>
  )
}

export default  memo(ChildA)
