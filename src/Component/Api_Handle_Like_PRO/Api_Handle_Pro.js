import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Api_Handle_Pro() {
    const [apiData, setApiData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setError(false);

                // Simulate a delay before making the API call
                await new Promise(resolve => setTimeout(resolve, 3000)); // 2 seconds delay

                const response = await axios.get('https://jsonplaceholder.typicode.com/users');

                setApiData(response.data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false); // Ensure loading is set to false in case of error
            }
        })();
    }, []);

    if (loading) {
        return <h1 className='text-2xl text-center font-bold'>Loading.....</h1>;
    }

    if (error) {
        return <h1 className='text-2xl text-center font-bold'>SomeThing went wrong.....</h1>;
    }

    return (
        <div>
            {apiData?.length > 0 &&
                <div>
                    <h1 className='text-xl font-bold text-center'>Number of Data: {apiData.length} </h1>
                    <div className='grid grid-cols-3 gap-2'>
                        {apiData?.map((item, index) => {
                            return (
                                <div key={item.id} className='border text-center'>
                                    <div>
                                        <h1 className='font-bold text-start'>Detail:</h1>
                                        <h1>Name: {item.name}</h1>
                                        <h1>UserName: {item.username}</h1>
                                        <h1>Website: {item.website}</h1>
                                        <h1>Phone NO: {item.phone}</h1>
                                        <div>
                                            <h1 className='font-bold text-start'>Address:</h1>
                                            <p>City: {item?.address?.city}</p>
                                            <p>Street: {item?.address?.street}</p>
                                            <p>Zipcode: {item?.address?.zipcode}</p>
                                            <p>Suite: {item?.address?.suite}</p>
                                        </div>
                                        <div>
                                            <h1 className='font-bold text-start'>Company:</h1>
                                            <p>Name: {item?.company?.name}</p>
                                            <p>BS: {item?.company?.bs}</p>
                                            <p>CatchPhrase: {item?.company?.catchPhrase}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default Api_Handle_Pro;
