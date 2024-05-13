import React, { useState } from 'react';

function Todoapp() {
    const [activity, setActivity] = useState('');
    const [listdata, setListdata] = useState([]);

    function addTodoos() {
        // in react this is asynchronous state which means we have click 2 time on button to display the data   
        setListdata([...listdata,activity])
        console.log(listdata);
        setActivity(''); // Clear input field after adding todo
         // setListdata((listdata)=>{
            // const updatedList =[...listdata,activity]
            // console.log(updatedList)
            // return updatedList;
    }
    
    function deleteTodo(index) {
        const updatedList = [...listdata];
        updatedList.splice(index,1); // Remove the item at the specified index
        setListdata(updatedList);
    }

    function editTodo(index){
        const editlist=[...listdata]
        

    }
    return (
        <>
            <div className='m-9'>
                <h1 className='font-bold text-2xl mb-5'>Todo app</h1>
                <div className='flex gap-3'>
                    <input
                        onChange={(e) => setActivity(e.target.value)}
                        className='' type='text' placeholder='Add todos!' value={activity}
                    />
                    <button
                        onClick={addTodoos}
                        className='border bg-black text-white p-2 rounded'>Add
                    </button>
                </div>
                <div>
                    <ul>
                        {listdata.map((item, index) => (
                            <div key={index} className='flex'>
                                <h1 className='font-mono text-xl'>{item}</h1>
                                <button
                                    onClick={() => deleteTodo(index)}
                                    className='border bg-red-500 text-white p-2 rounded'>Delete
                                </button>
                                <button
                                    onClick={() => editTodo(index)}
                                    className='border bg-red-500 text-white p-2 rounded'>Edit
                                </button>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Todoapp;
