import React, { useEffect, useState, useRef } from 'react'
import { EmployeeData } from './EmployeeData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { clear } from '@testing-library/user-event/dist/clear';
import { blue } from '@mui/material/colors';



function Curdoperation() {
  const [data, setdata] = useState([]);
  const [value, setValue] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState();
  const [id, setId] = useState(0);
  const [isudate, setIsUpdate] = useState(false);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  useEffect(() => {
    setdata(EmployeeData);
    input1.current.focus();
    input2.current.focus();
    input3.current.focus();
  }, []);
  const hanleEdit = (id) => {
    const dt = data.filter(item => item.id === id);
    if (dt !== undefined) {
      setIsUpdate(true)
      setId(id)
      setFirstname(dt[0].firstname);
      setLastname(dt[0].lastname);
      setAge(dt[0].age);

    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setValue([...value, e.target.value]);
      e.target.value = '';
      input2.current.focus();

    }
  };
  const handleKeyDown1 = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setValue([...value, e.target.value]);
      e.target.value = '';
      input3.current.focus();

    }
  };
  const hanleDelete = (id) => {

    if (id > 0) {
      if (window.confirm('Are You Sure to Delete This Item')) {
        const dt = data.filter((item => item.id !== id));
        setdata(dt)
      }
    }
  }

  const hanleUpdate = () => {
    const index = data.map((item) => {
      return item.id
    }).indexOf(id);
    const dt = [...data];
    dt[index].firstname = firstname;
    dt[index].lastname = lastname;
    dt[index].age = age;
    setdata(dt);
    hanleClear()
  }
  const hanleSave = (e) => {
    e.preventDefault();
    const dt = [...data];
    const newobject = {

      id: EmployeeData.length + 1,
      firstname: firstname,
      lastname: lastname,
      age: age

    }
    dt.push(newobject);
    setdata(dt)
  }
  const hanleClear = (id) => {

    setId(0)
    setFirstname('');
    setLastname('');
    setAge('');
    setIsUpdate(false)
  }

  return (
    <div>
      <div className='flex justify-center mt-3 mb-3 space-x-6' >
        <div>
          <label><span className='font-bold'>First name:</span>
            <input type='text' placeholder='Enter first Name' ref={input1} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => setFirstname(e.target.value)} value={firstname} />
          </label>
        </div>
        <div>
          <label><span className='font-bold' >Last name:</span>
            <input type='text' placeholder='Enter  Last  Name' ref={input2} onKeyDown={(e) => handleKeyDown1(e)} onChange={(e) => setLastname(e.target.value)} value={lastname} />
          </label>
        </div>
        <div>
          <label><span className='font-bold'>Age:</span>
            <input type='text' placeholder='Enter age' ref={input3} onChange={(e) => setAge(e.target.value)} value={age} />
          </label>
        </div>
        <div className='space-x-2'>
          {
            !isudate ?
              <Button variant="contained" color="primary" onClick={(e) => hanleSave(e)}> Save</Button>
              :
              <Button variant="contained" color="primary" onClick={() => hanleUpdate()}> Upadate</Button>

          }

          <Button variant="contained" color="primary" onClick={() => hanleClear()}>clear</Button>

        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Sr.No</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>id.</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Firstname</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>lastname</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }} >Age</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.firstname}</TableCell>
                  <TableCell>{item.lastname}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => hanleEdit(item.id)}>Edit</Button>&nbsp;
                    <Button variant="contained" color="primary" onClick={() => hanleDelete(item.id)}>Delete</Button>
                  </TableCell>

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default Curdoperation
