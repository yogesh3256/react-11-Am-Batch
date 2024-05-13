import React, { useEffect, useRef, useState } from 'react';
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function InputFieldTask() {
  const [value, setValue] = useState([]);
  const input1 = useRef(null);
  const [isChecked, setChecked] = useState(false);

  useEffect(() => {
    input1.current.focus();
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setValue([...value, e.target.value]);
      e.target.value = '';
    }
  };

  const checkKey = () => {
    // Toggle the state of isChecked when Checkbox is clicked
    setChecked(!isChecked);
  };

  return (
    <div>
      <div>
        <input className='border border-black m-10' ref={input1} onKeyDown={(e) => handleKeyDown(e)} />
      </div>
      <div className='mt-20'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 260 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: 'black' }}>
                <TableCell sx={{ color: 'white' }}>Action</TableCell>
                <TableCell sx={{ color: 'white' }}>Confirm</TableCell>
                <TableCell sx={{ color: 'white' }}>TextField</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {value.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>Action</TableCell>
                  <TableCell>
                    <Checkbox checked={isChecked} onClick={() => checkKey()} />
                  </TableCell>
                  <TableCell style={{ color: isChecked ? 'gray' : 'black' }}>{item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default InputFieldTask;
