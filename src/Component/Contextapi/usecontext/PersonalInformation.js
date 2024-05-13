import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { NewContext } from '../Newcontext';

function BasicInformation() {
  const { details, setDetails,goToNextTab } = useContext(NewContext)
  const { control, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    // Ensure details is initialized as an array
    const tempData = Array.isArray(details) ? [...details] : [];
    tempData.push(data);
    setDetails(tempData);
    reset();
    goToNextTab();
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-3' style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <div className=' grid grid-cols-3 gap-3'>
        <div>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                id="firstName"
                size='small'
                fullWidth
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                id="lastName"
                size='small'
                fullWidth
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="dob"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Date of Birth"
                id="dob"
                size='small'
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Address"
                id="address"
                size='small'
                fullWidth
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="City"
                id="city"
                size='small'
                fullWidth
              />
            )}
          />
        </div>

        <div>
          <Controller
            name="pincode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Pincode"
                id="pincode"
                size='small'
                fullWidth
              />
            )}
          />
        </div>



        <div>
          <Controller
            name="mobileno"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Mobile No"
                id="mobileno"
                size='small'
                type="tel"
                fullWidth
              />
            )}
          />
        </div>

       

      </div>
      <div>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <RadioGroup row aria-label="gender" {...field}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              )}
            />
          </FormControl>
        </div>
        <div className='space-x-3'>
          
      <Button  variant="contained" color="primary">Preview</Button>
      <Button type="submit" variant="contained" color="primary">Next</Button>
        </div>
    </form>
  );
}

export default BasicInformation;
