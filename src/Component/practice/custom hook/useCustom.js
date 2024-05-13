import { useState } from "react"


function useCustom(initialvalue=0) {
    const [count, setcount]=useState(initialvalue )
    function increament(){
      setcount(count +1 )
    }
    function decreament(){
      setcount(count -1 )
    }
  return[count,increament,decreament]
}

export default useCustom
