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
       className='bg-blue-700 text-white w-20'
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
