import React from 'react'
 
  

function Reducemethod2(numbers) {
    const total = numbers.reduce((acc, curr) => acc + curr, 0)
    console.log("total",total);
    return (
        <div>
        <h2>List of Numbers</h2>
        <ul>
          {numbers.map((number, index) => (
            <li key={index}>{number}</li>
          ))}
        </ul>
        <p>Total Sum: {total}</p>
      </div>
    )
}

export default Reducemethod2
