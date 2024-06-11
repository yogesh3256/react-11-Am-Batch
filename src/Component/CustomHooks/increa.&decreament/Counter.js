import React from 'react'
function Counter() {
    const [count, setCount] = React.useState(0)
    const increament = () => setCount(count + 1);
    const decreament = () => setCount(count - 1);
    return({count,increament,decreament});
}

export default Counter
