import React from 'react'
import { data,data2 } from './UsecontextApi'

function UsecontextApi3() {

    console.log("data");
    return (

        <data.Consumer>
            {
                (value) => {
                    return (
                       <data2.Consumer>
                        {
                            (value2)=>{
                                return(
                                    <h1>my first name is{value}<br/>and my lastname is {value2} </h1>
                                )
                            }
                        }
                       </data2.Consumer>
                    )
                }
            }
        </data.Consumer>
    )

}

export default UsecontextApi3
