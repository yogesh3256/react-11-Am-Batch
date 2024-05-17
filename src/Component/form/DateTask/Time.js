import React, { useEffect, useState, useRef } from 'react';
import CommonButton from '../../common/Button/CommonButton';

function Time() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
 
        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClearInterval = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-center'>Time: {time}</h1>
           <div className='text-center'>
           <CommonButton
            label='Clear'
            onClick={handleClearInterval}
            className='bg-black text-white '
            />
           </div>
         </div>
    );
}

export default Time;
