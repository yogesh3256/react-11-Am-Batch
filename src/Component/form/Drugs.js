import * as React from 'react';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function Drugs() {
  const [frequencyChip, setFrequencyChip] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [Duration, setDuration] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');


  function handleFrequencyClick(frequency) {
    setFrequencyChip(frequency);
    updateQuantity(frequency, selectedDuration);
  }

  const handleDurationClick = (duration, type) => {
    setSelectedDuration(duration, type);
    console.log(duration, type);
    setDuration(type);
   

    updateQuantity(frequencyChip, duration);
  };

  const updateQuantity = (frequency, duration) => {
    const freqValues = frequency.split('--').map(Number);
    const freqValue = freqValues.reduce((acc, val) => acc + val, 0);
    const durationValue = parseInt(duration, 10) || 0;
    const result = freqValue * durationValue;
    setQuantity(result);

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const endDate = new Date(tomorrow);
    endDate.setDate(endDate.getDate() + (durationValue - 1));

    setFromDate(tomorrow.toISOString().split('T')[0]);
    setToDate(endDate.toISOString().split('T')[0]);
  };


  return (
    <div>
      <div className='m-16 space-y-5'>

        <div className='  border h-60  rounded'>
          <div className='flex justify-between  rounded text-center h-8 border bg-violet-500'>
            <h1>Frequency</h1>
            <h2 className='text-white'> <AddCircleOutlineIcon className='bg-blue-800 rounded-xl' /></h2>
          </div>
          <div className=' mt-3  ml-4'>
            <Stack direction="row" spacing={4}>
              <Chip label=" 1----1----1" variant="outlined"  onClick={() => handleFrequencyClick('1----1----1')} />
              <Chip label=" 1----0----1" variant="outlined" onClick={() => handleFrequencyClick('1----0----1')} />
              <Chip label=" 0----1----1" variant="outlined" onClick={() => handleFrequencyClick('0----1----1')} />
              <Chip label=" 0----0----1" variant="outlined" onClick={() => handleFrequencyClick('0----0----1')} />
              <Chip label=" 1----0----0" variant="outlined" onClick={() => handleFrequencyClick('1----0----0')} />
              <Chip label=" 0----1----0" variant="outlined" onClick={() => handleFrequencyClick('0----1----0')} />
            </Stack>
          </div>
          <div className=' w-52 mt-9  ml-4'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"><h1>Frequency</h1></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={frequencyChip}
                label="frequency"

              >
                <MenuItem value={'1----1----1'}>  1----1----1</MenuItem>
                <MenuItem value={'1----0----1'}>  1----0----1</MenuItem>
                <MenuItem value={'0----1----1'}>0----1----1</MenuItem>
                <MenuItem value={'0----0----1'}> 0----0----1 </MenuItem>
                <MenuItem value={'1----0----0'}>1----0----0</MenuItem>
                <MenuItem value={'0----1----0'}> 0----1----0 </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {/* Duration division */}
        <div>
          <div className='  border h-48  rounded '>
            <div className=' h-8 border bg-pink-400 '>
              <h1>Duration </h1>
            </div>
            <div className=' ml-3'>
              <div className=' mt-3'>
                <Stack direction="row" spacing={4}>
                  <Chip label="1 Day" variant="outlined" onClick={() => handleDurationClick('1', 'Days')} />
                  <Chip label=" 2 Days" variant="outlined" onClick={() => handleDurationClick('2', 'Days')} />
                  <Chip label=" 3 Days" variant="outlined" onClick={() => handleDurationClick('3', 'Days')} />
                  <Chip label=" 4 Days" variant="outlined" onClick={() => handleDurationClick('4', 'Days')} />
                  <Chip label=" 5 Days" variant="outlined" onClick={() => handleDurationClick('5', 'Days')} />
                  <Chip label=" 6 Days" variant="outlined" onClick={() => handleDurationClick('6', 'Days')} />
                  <Chip label="1 Week " variant="outlined" onClick={() => handleDurationClick('7', 'Days')} />
                  <Chip label=" 15 Days " variant="outlined" onClick={() => handleDurationClick('15', 'Days')} />
                  <Chip label="1 Month " variant="outlined" onClick={() => handleDurationClick('30', 'Days')} />
                  <Chip label="Days" variant="outlined" onClick={() => handleDurationClick('1', 'Days')} />
                  <Chip label=" Months" variant="outlined" onClick={() => handleDurationClick('30', 'Days')} />
                  <Chip label=" Year" variant="outlined" onClick={() => handleDurationClick('365', 'Days')} />
                </Stack>
              </div>
              <div className='mt-9 flex space-x-5 '>
                <TextField
                  label="Duration"
                  defaultValue={""}
                  value={selectedDuration}
                />

                <FormControl className=' w-[75%]'>
                  <InputLabel id="demo-simple-select-label">Duration In*</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Duration In*"
                    value={Duration}
                  >
                    <MenuItem value={'Days'}>Days</MenuItem>
                    <MenuItem value={'Months'}>Months</MenuItem>
                    <MenuItem value={'Year'}>Year</MenuItem>
                  </Select>
                </FormControl>

              </div>
            </div>
          </div>

        </div>
        {/*  Duration division End */}
        <div className=' space-x-2'>
          <TextField className=' w-[40%] '
            label="Quantity*"
            value={Quantity}
          />


        </div>

        <div className=' space-x-6 flex'>

          <TextField
            type='date'
            label="From Date"
            value={fromDate}
          />
          <TextField
            type='date'
            label=" To Date"
            value={toDate}
          />

        </div>





      </div>

    </div>

  );
}
