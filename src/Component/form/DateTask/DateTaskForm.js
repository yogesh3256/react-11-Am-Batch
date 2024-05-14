import React from 'react';
import CommonSelect from '../../common/Select/CommonSelect';
import { useForm } from 'react-hook-form';
import CommonTextField from '../../common/TextField/CommonTextField';

const weekDaysOptions = [
  { id: 1, value: 'Monday', label: 'Monday' },
  { id: 2, value: 'Tuesday', label: 'Tuesday' },
  { id: 3, value: 'Wednesday', label: 'Wednesday' },
  { id: 4, value: 'Thursday', label: 'Thursday' },
  { id: 5, value: 'Friday', label: 'Friday' },
  { id: 6, value: 'Saturday', label: 'Saturday' },
  { id: 7, value: 'Sunday', label: 'Sunday' }
];

function DateTaskForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
     
    const extractedData = {
      weekDay: data.weekDay.value,
      fullname: data.fullname
    };
    console.log('extractedData', extractedData);
    
  };

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold text-blue-600'>Manages The Consultation Charges</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <CommonSelect
              name="weekDay" // Name of the field
              control={control} // Pass the control prop from useForm()
              label="Week Day" // Label for the select
              options={weekDaysOptions}
              placeholder='Select the Week Day'
              fullWidth={false}
            />
            <CommonTextField
              name='fullname'
              control={control}
              label='Full Name'
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DateTaskForm;
