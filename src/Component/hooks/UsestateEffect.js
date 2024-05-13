import { useState, useEffect, React } from 'react'

function UsestateEffect() {
    // UseState hooks Example &  UseEffect example
    const [count, setcounter] = useState(0)
    const [data, setdata] = useState(0)
    useEffect(() => {
        console.log("coponent mounted")
    }, [data])
    function updateConut() {
        setcounter(count + 1)

    }
    function updatedata() {
        setdata(data + 1)
    }
    return (
        <div className='justify-between text-center'>


            <div className=''>
                <h1 >Button clicked <span className='font-extrabold'>{count}</span> times</h1>
                <button className='bg-black text-white rounded-md p-2' onClick={updateConut}>Click</button><br /> <br />
                <h1 className='font-extrabold'>{data}</h1>
                <button className='bg-black text-white rounded-md p-2' onClick={updatedata}>update data</button>

            </div>
        </div>
    )
}

export default UsestateEffect
