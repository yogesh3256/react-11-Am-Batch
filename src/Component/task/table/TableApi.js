import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
const dataArray = [
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25, std: 'X', percentage: 85 },
    { id: 2, firstName: 'Jane', lastName: 'Doe', age: 24, std: 'XI', percentage: 90 },
    { id: 3, firstName: 'Alice', lastName: 'Smith', age: 22, std: 'X', percentage: 80 },
    { id: 4, firstName: 'Bob', lastName: 'Johnson', age: 23, std: 'XII', percentage: 95 },
    { id: 5, firstName: 'Emma', lastName: 'Brown', age: 21, std: 'XI', percentage: 88 },
    { id: 6, firstName: 'Michael', lastName: 'Davis', age: 26, std: 'X', percentage: 75 },
    { id: 7, firstName: 'Olivia', lastName: 'Wilson', age: 20, std: 'XII', percentage: 92 },
    { id: 8, firstName: 'William', lastName: 'Martinez', age: 22, std: 'XI', percentage: 87 },
    { id: 9, firstName: 'Sophia', lastName: 'Anderson', age: 24, std: 'X', percentage: 82 },
    { id: 10, firstName: 'James', lastName: 'Taylor', age: 23, std: 'XII', percentage: 94 },
    { id: 11, firstName: 'Isabella', lastName: 'Thomas', age: 21, std: 'XI', percentage: 89 },
    { id: 12, firstName: 'Alexander', lastName: 'Harris', age: 25, std: 'X', percentage: 78 },
    { id: 13, firstName: 'Mia', lastName: 'Clark', age: 22, std: 'XII', percentage: 91 },
    { id: 14, firstName: 'Ethan', lastName: 'Lewis', age: 20, std: 'XI', percentage: 86 },
    { id: 15, firstName: 'Ava', lastName: 'Lee', age: 24, std: 'X', percentage: 83 }
];

function TableApi() {
    const [data, setData] = useState(dataArray);



    useEffect(() => {
        axios.get('http://192.168.0.188:8080/StudentsList')
            .then((res) => {
                
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    
const handleDelete=(id)=>{

    const Deleterow = data.filter((row)=>row.id !== id)
    setData(Deleterow)


}

 
    return (
        <div>
            {
                data.length > 0 ?
                    (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow className='bg-gray-200'>
                                        <TableCell>firstName</TableCell>
                                        <TableCell align="right">lastName</TableCell>
                                        <TableCell align="right">age</TableCell>
                                        <TableCell align="right">std</TableCell>
                                        <TableCell align="right">percentage</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell component="th" scope="row">{item.firstName}</TableCell>
                                                <TableCell align="right">{item.lastName}</TableCell>
                                                <TableCell align="right">{item.age}</TableCell>
                                                <TableCell align="right">{item.std}</TableCell>
                                                <TableCell align="right">{item.percentage}</TableCell>
                                                <TableCell align="right">
                                                    <DeleteIcon onClick={()=>{handleDelete(item.id)}} />
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) :
                    (
                        <h1 className='text-center font-bold text-2xl'> NO record Found....</h1>
                    )
            }
        </div>
    );
}

export default TableApi;
