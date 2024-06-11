import React from 'react'
import Counter from './increa.&decreament/Counter'
import CommonButton from '../common/Button/CommonButton'

function Addiction() {
    const { count, increament, decreament } = Counter();
    return (
        <div>
            <h1 className='text-3xl'> Count: {count}</h1>
            <div className='flex gap-5'>
                <div>
                    <CommonButton label='increamment' className="bg-green-400 text-white px-2 py-1"
                        onClick={increament}
                    />
                </div>
                <div>
                    <CommonButton label='Decreament' className=" bg-red-400 text-white px-2 py-1"
                        onClick={decreament}
                    />
                </div>
            </div>
        </div>
    )
}

export default Addiction
