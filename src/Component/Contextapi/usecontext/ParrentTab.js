import React, { useState } from 'react'
import CommonButton from '../../common/Button/CommonButton'
 import ParrentTabModal from  "../../Contextapi/usecontext/ParrentTabModal";
 

function ParrentTab() {
  const [openParrentTabMoal,setOpenParrentTabModal]=useState(false)
  const [formData,setFormData]=useState([])
  
  return (
    <div className='px-2'>
      
      <div className='text-end p-4'>
        <CommonButton
        label={'ADD'}
        type={'button'}
        className={'bg-sky-800 text-white px-3  rounded'}
        onClick={()=>{setOpenParrentTabModal(true);console.log("wdddwdd");}}
        
        />
      </div>
      <div>
        {openParrentTabMoal && 
        <ParrentTabModal
        openParrentTabMoal={openParrentTabMoal}
        setOpenParrentTabModal={setOpenParrentTabModal}
        formData={formData}
        setFormData={setFormData}
        />
        }
      </div>
    </div>
  )
}

export default ParrentTab