import React, { useState } from 'react'
import CommonButton from '../common/Button/CommonButton'
import DependantDropDoown from './DependantDropDoown'

function DropDownTable() {
    const [openModal,setOpenModal]=useState(false);
     const handleOpen=()=>{
        setOpenModal(true)
     }
     const handleClose=()=>{
        setOpenModal(false)
     }
  return (
    <div>
    <div className=' text-end m-6'>
    <CommonButton 
  type='button'
  label='+ADD'
  onClick={handleOpen}
  className='bg-white text-blue-700 border border-blue-700 hover:bg-blue-700
   hover:text-white w-20 font-semibold transition-all duration-300 ease-in-out'
/>

    </div>
    <DependantDropDoown
    open={openModal}
    handleOpen={handleOpen}
    handleClose={handleClose}
    />
    </div>
  )
}

export default DropDownTable
