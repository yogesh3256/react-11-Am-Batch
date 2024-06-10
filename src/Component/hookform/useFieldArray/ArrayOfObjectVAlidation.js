import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Box, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const validationSchema = Yup.object().shape({
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string()
        .required('Name is required')
        .matches(/^[A-Za-z\s]{2,}$/, 'Name must be at least 2 characters long and contain only letters and spaces'),
      age: Yup.number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .max(120, 'Age must be less than or equal to 120'),
    })
  ),
});

const defaultValues = {
  items: [
    { name: '', age: '' },
  ],
};

const ArrayOfObjectValidation = () => {
  const { control, handleSubmit, formState: { errors } ,reset} = useForm({
    defaultValues:defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'items',
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <Box key={item.id} display="flex" alignItems="center" mb={2}>
          <Controller
            name={`items.${index}.name`}
            control={control}
            defaultValue={item.name}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                variant="outlined"
                error={!!errors.items?.[index]?.name}
                helperText={errors.items?.[index]?.name?.message}
                margin="normal"
              />
            )}
          />
          <Controller
            name={`items.${index}.age`}
            control={control}
            defaultValue={item.age}
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                type="number"
                variant="outlined"
                error={!!errors.items?.[index]?.age}
                helperText={errors.items?.[index]?.age?.message}
                margin="normal"
              />
            )}
          />
          <IconButton color="secondary" onClick={() => remove(index)}>
            <Remove />
          </IconButton>
        </Box>
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => append({ name: '', age: '' })}
        startIcon={<Add />}
      >
        Add
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        style={{ marginTop: '16px' }}
      >
        Submit
      </Button>
    </form>
  );
};

export default ArrayOfObjectValidation;
