import React, { useReducer } from 'react'
const reducer = (count, action) => {
  if (action.type === "INCREAMENT") {
    return count + 1

  }
  if (action.type === "DECREAMENT") {
    return count - 1
  }

  console.log(count, action);
}
function Usereducer() {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1> the count will be  {count} </h1>
      <button onClick={() => dispatch({ type: "INCREAMENT" })}>INCREMENT</button><br />
      <button onClick={() => dispatch({ type: "DECREAMENT" })}>DECREMENT</button>
    </div>
  )
}

export default Usereducer
