import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_COMMON_URL } from '../../Http'
import CommonPaginationTable from '../common/PaginationTable/CommonPAginationTable';

function PaginationTableTask() {
  const [usersData, setUsersData] = useState([])

  console.log("usersData", usersData);
  useEffect(() => {
    axios.get(`http://192.168.0.93:8080/registration/getAllUsers`)
      .then((res) => {
        setUsersData(res.data)

      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div >
      <CommonPaginationTable
        DataResult={usersData}
        defaultRowsPerPage={6}
        rowsPerPageOptions={[2,6,8,{label:"All" ,value:-1}]}
        paginationShape={'rounded'}
        paginationColor={"secondary"}
        paginationSize={"large"}
        paginationPosition={'bottomCenter'}
        selectSize={'small'}
        showFirstButton={true}
        showLastButton={true}
 
        count={8}


      />
    </div>
  )
}

export default PaginationTableTask
