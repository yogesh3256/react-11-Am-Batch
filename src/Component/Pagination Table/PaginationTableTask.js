import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { API_COMMON_URL } from '../../Http'
import CommonPaginationTable from '../common/PaginationTable/CommonPAginationTable';

function PaginationTableTask() {
    const [usersData,setUsersData]=useState([])
    
console.log("usersData",usersData);
    useEffect(()=>{
        axios.get(`${API_COMMON_URL}/registration/getAllUsers`)
        .then((res)=>{
            setUsersData(res.data)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <div >
      <CommonPaginationTable
      data={usersData}
      rowsPerPageOptions ={ [2,  4,  6,8,10, { label: 'All', value: -1 }]}
      rowsPerPage={4}
      colSpan = {5}
      className='m-9 h-1/2  whitespace-nowrap'
      count={usersData?.length}
     
      />
    </div>
  )
}

export default PaginationTableTask
