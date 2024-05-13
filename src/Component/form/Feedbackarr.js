import React from 'react'
import Image1 from '../assets/photos/image1.png'
import Image2 from '../assets/photos/image2.png'
import Image3 from '../assets/photos/image3.png'
import Image4 from '../assets/photos/image4.png'

function Feedbackarr() {
    const yogesh = [
        {
            id: 1,
            name: "yogesh",
            roll_no: 23,
            sub: "java",
            photos:Image1
        
        },
        {
            id: 2,
            name: " abhi",
            roll_no: 23,
            sub: "html",
            photos:Image2
        },
        {
            id: 3,
            name: " kiran",
            roll_no: 23,
            sub: "python",
            photos:Image3
        },
        {
            id: 4,
            name: "bharat",
            roll_no: 23,
            sub: "sql",
            photos:Image4
        },
    ]
    return (
        <div className='flex justify-center'>
            <table class="table- fixed" className='border'>

                <tr  className='border'>
                    <th className='border'> id</th>
                    <th className='border'> name</th>
                    <th className='border'> roll_no</th>
                    <th className='border'> sub</th>
                  
                </tr>sub


              {yogesh.map((item)=>{
                return(
                    <tr className='border'>
                        <td className='border' >{item.id}</td>
                        <td className='border'>{item.name}</td>
                        <td className='border'>{item. roll_no}</td>
                        <td className='border'>{item.  sub}</td>
                        
                     
                    </tr>

                )
              }
              )}




            </table>
        </div>
    )
}

export default Feedbackarr
