 
import useCustom from './useCustom'

function Count() {
   const [count,increament,decreament]=useCustom(100)
  return (
    <div>
      <h1 >{count}</h1>
      <button onClick={increament}>INCREAMENT</button>
      <button onClick={decreament}>DECREAMENT</button>
    </div>
  )
}

export default Count
