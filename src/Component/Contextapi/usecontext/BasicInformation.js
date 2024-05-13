import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { NewContext } from '../Newcontext';

function BasicInformation() {
  const { details, setDetails, goToNextTab } = useContext(NewContext);
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (!Array.isArray(details)) {
      // If details is not an array, initialize it as an empty array
      setDetails([data]);
    } else {
      // If details is already an array, push the new data into it
      setDetails([...details, data]);
    }
    reset();
  };

  console.log("details", details);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-3'
      style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}
    >
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
      <Button onClick={() => { goToNextTab() }} variant="contained" color="primary">Next</Button>
    </form>
  );
}

export default BasicInformation;
