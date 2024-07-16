import React, { useContext } from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { NewContext } from '../Newcontext';

function BasicInformation() {
  const {value, setValue} = useContext(NewContext);
  const { control } = useFormContext();

  

  return (
     
    <>
  <div className=' grid grid-cols-3 gap-3'>
        <div>
          <Controller
            name="fullName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Full Name"
                id="fullName"
                size='small'
                fullWidth
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                id="Email"
                size='small'
                fullWidth
              />
            )}
          />
        </div>
        <div>
          <Controller
            name="age"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                id="age"
                size='small'
                fullWidth
              />
            )}
          />
        </div>
      </div>
      <Button onClick={() =>setValue(value + 1)} variant="contained" color="primary">Next</Button>
    </>

   
  );
}

export default BasicInformation;
