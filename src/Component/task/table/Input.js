import { Button, TextField } from '@mui/material'
import { useState } from 'react';
 import {useForm} from 'react-hook-form'
 import Table from '../table/Table'

function Input() {
  const [details,setdetails]=useState([])
  const{register,
    handleSubmit
  }=useForm();


  const onsubmit=(data)=> {
    let temparr=[...details]
    temparr.push(data);
    setdetails(temparr)
    console.log('data',data);
    console.log(temparr);
  }
  return (
    <div className=' mb-8  '>
       <form onSubmit={handleSubmit(onsubmit)}>
           <div className='space-x-4'>
               <TextField
               {...register('firstname',{required:true})}
               label='firstname'
               size='small'
               />
                 <TextField
                  {...register('lastname',{required:true})}
               label='lastname'
               size='small'
               />
                 <TextField
                  {...register('age',{required:true})}
               label=' age'
               size='small'
               />
   <TextField
                  {...register('no',{required:true})}
               label=' NO.'
               size='small'
               />
                        
             <Button type='submit' variant="outlined">ADD</Button>
        
             
                </div>
       </form>
       <Table 
       TableInfo={details}
       />
    </div>
  )
}

export default Input
