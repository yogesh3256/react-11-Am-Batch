 
import useCustom from './useCustom'

function Count2() {
   const [count,increament,decreament]=useCustom()
  return (
    <div>
      <h1 >{count}</h1>
      <button onClick={increament}>INCREAMENT</button>
      <button onClick={decreament}>DECREAMENT</button>
    </div>
  )
}

export default Count2
