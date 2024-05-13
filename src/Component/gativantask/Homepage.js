import React from 'react'
import Gativan from '../assets/photos/Gativan.png'
import Basic from '../assets/photos/Basic.png'
import Wheel from '../assets/photos/Wheel.png'
function Homepage() {
    const carddetails = [
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        },
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        },
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        },
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        },
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        },
        {
            id: 1,
            name: "Brake Replacement",
            button: "Add Service",
            image: Wheel
        }
    ]
    return (
        <div>

            <navbar className=' bg-blue-900 flex justify-between ' >

                <img className=' w-36 ml-16' src={Gativan} />

                <ul className='flex space-x-14 py-4 mt-3 text-white'>
                    <li>How it works?</li>
                    <li>Club</li>
                    <li>Blog</li>
                    <li>Fraq</li>
                    <li>Feedback</li>
                    <li><button className='bg-white text-black p-1 mr-12 text-base'>Log In/Sign up</button></li>
                </ul>
            </navbar>
            <div>
                <div className='m-8 w-[60%] border flex'>
                    <div>
                        <img src={Basic} />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold m-2'>Periodic Maintenance</h1>
                        <div className='m-2'>

                            <div >
                                <div>
                                    <h1> Engine</h1>
                                    <ul className='flex space-x-6  list-disc ml-4'>

                                        <li>Oil Change</li>
                                        <li> Clean Oil Filter</li>
                                    </ul>
                                    <ul className=' ml-4 flex space-x-6 list-disc '>

                                        <li> Clean Carborator</li>
                                        <li> Spark Plug check</li>
                                    </ul>
                                </div>
                                <div />

                            </div>
                        </div>
                    </div>

                </div>
                <div className=' m-6'>
                    <h1 className='text-2xl font-bold'> Additional services you may like</h1>
                </div>

                <div className=' m-6 flex grid-cols-3 gap-x-14 w-[60%]'>
                    {carddetails.map((item) => {

                    })}

                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button>
                    </div>
                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button></div>
                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button></div>
                </div>
                <div className=' m-6 flex grid-cols-3 gap-14 w-[60%]'>
                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button></div>
                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button></div>
                    <div className='border h-60 w-60'>
                        <img />
                        <h1> </h1>
                        <button></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Homepage
