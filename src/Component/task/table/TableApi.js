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
import CommonButton from '../../common/Button/CommonButton';
import StudentModal from './StudentModal';


function TableApi() {
    const [data, setData] = useState([]);
    const [openStudentModal, setStudentModal] = useState(false)

    const handleOpen = () => setStudentModal(true)
    const handleClose = () => setStudentModal(false)




    useEffect(() => {
        axios.get('http://192.168.0.188:8080/StudentsList')
            .then((res) => {
                setData(res.data)
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://192.168.0.188:8080/StudentsList`)


    }


    return (
        <div>
            <div className='text-end m-5'>
                <CommonButton
                    label='+ADD STUDENT'
                    className='bg-black text-white   w-36 py-2'
                    type='button'
                    onClick={handleOpen}


                />
            </div>
            <div>

                {
                    openStudentModal &&
                    <StudentModal
                        open={openStudentModal}
                        handleClose={handleClose}

                    />
                }
            </div>




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
                                                    <DeleteIcon onClick={() => { handleDelete(item.id) }} />
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

            <div>

            </div>
        </div>
    );
}

export default TableApi;
