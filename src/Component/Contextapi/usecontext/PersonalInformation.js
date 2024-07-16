import React, { useContext } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField, Button, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel } from '@mui/material';
import { NewContext } from '../Newcontext';

function BasicInformation() {

  const { control, } = useFormContext();
  const { value, setValue } = useContext(NewContext)


  return (

    <>
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

        <Button onClick={() => setValue(value - 1)} variant="contained" color="primary">Preview</Button>  
        <Button onClick={() => setValue(value + 1)} type="submit" variant="contained" color="primary">Next</Button>
      </div>

    </>
  );
}

export default BasicInformation;
