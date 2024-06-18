import React from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const UseFieldArrayForm = () => {
  const { control, handleSubmit, register, setValue, watch } = useForm({
    defaultValues: {
      numberOfTopFields: '',
      topFields: []
    }
  });

  const { fields: topFields, append: appendTopField, remove: removeTopField } = useFieldArray({
    control,
    name: 'topFields'
  });

  const numberOfTopFields = watch('numberOfTopFields');

  const onAddTopFields = () => {
    const num = parseInt(numberOfTopFields, 10);
    if (!isNaN(num)) {
      setValue('topFields', []); // Clear existing top fields
      for (let i = 0; i < num; i++) {
        appendTopField({ subFields: [] });
      }
    }
  };

  const onAddSubFields = (topFieldIndex) => {
    const subFieldCount = watch(`topFields[${topFieldIndex}].subFieldCount`);
    const num = parseInt(subFieldCount, 10);
    if (!isNaN(num)) {
      const updatedTopFields = [...topFields];
      updatedTopFields[topFieldIndex].subFields = Array.from({ length: num }, () => ({ childFields: [] }));
      setValue('topFields', updatedTopFields);
    }
  };

  const onAddChildFields = (topFieldIndex, subFieldIndex) => {
    const childFieldCount = watch(`topFields[${topFieldIndex}].subFields[${subFieldIndex}].childFieldCount`);
    const num = parseInt(childFieldCount, 10);
    if (!isNaN(num)) {
      const updatedTopFields = [...topFields];
      updatedTopFields[topFieldIndex].subFields[subFieldIndex].childFields = Array.from({ length: num }, () => ({ value: '' }));
      setValue('topFields', updatedTopFields);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" alignItems="center" mb={2}>
          <TextField
            id="numberOfTopFields"
            name='numberOfTopFields'
            label="Number of Top-Level Fields"
            type="number"
            {...register('numberOfTopFields')}
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            onClick={onAddTopFields}
            style={{ marginLeft: '10px' }}
          >
            Add
          </Button>
        </Box>

        {topFields.map((topField, topIndex) => (
          <Box key={topField.id} mb={4} border={1} padding={2} borderRadius={4}>
            <Box display="flex" alignItems="center" mb={2}>
              <TextField
                label={`Number of Sub-Fields for Field ${topIndex + 1}`}
                type="number"
                variant="outlined"
                fullWidth
                {...register(`topFields[${topIndex}].subFieldCount`)}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onAddSubFields(topIndex)}
                style={{ marginLeft: '10px' }}
              >
                Add Sub-Fields
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeTopField(topIndex)}
                style={{ marginLeft: '10px' }}
              >
                Remove
              </Button>
            </Box>

            {topField.subFields.map((subField, subIndex) => (
              <Box key={subIndex} mb={4} border={1} padding={2} borderRadius={4}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Controller
                    control={control}
                    name={`topFields[${topIndex}].subFields[${subIndex}].value`}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={`Sub-Field ${subIndex + 1} for Top Field ${topIndex + 1}`}
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />
                  <TextField
                    label={`Number of Child Fields for Sub-Field ${subIndex + 1}`}
                    type="number"
                    variant="outlined"
                    fullWidth
                    {...register(`topFields[${topIndex}].subFields[${subIndex}].childFieldCount`)}
                    style={{ marginLeft: '10px' }}
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => onAddChildFields(topIndex, subIndex)}
                    style={{ marginLeft: '10px' }}
                  >
                    Add Child Fields
                  </Button>
                </Box>

                {subField.childFields.map((childField, childIndex) => (
                  <Box key={childIndex} mb={2}>
                    <Controller
                      control={control}
                      name={`topFields[${topIndex}].subFields[${subIndex}].childFields[${childIndex}].value`}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label={`Child Field ${childIndex + 1} for Sub-Field ${subIndex + 1}`}
                          variant="outlined"
                          fullWidth
                        />
                      )}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        ))}

        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default UseFieldArrayForm;
