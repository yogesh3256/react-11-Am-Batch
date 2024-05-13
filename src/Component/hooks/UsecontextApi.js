import React, { createContext } from 'react'
import UsecontextApi1 from './UsecontextApi1'





// context api provide 3 Rule
// 1. create, 2.provider, 3.consumer
const data = createContext();
const data2 = createContext();
function UsecontextApi() {
    // const value =[
    //     {
    //         name:'yogesh',
    
    //     },
    //     {
    //         lastname:"wakchaure"
    //     }
    //    ]
    const value="yogesh"
    const value2="wakchaure"
    return (
        <div>
           
           <data.Provider value={value}>
            <data2.Provider value={value2}>
                <UsecontextApi1 />
            </data2.Provider>
            </data.Provider>
        </div>
    )
}

export default UsecontextApi
 export {data,data2}