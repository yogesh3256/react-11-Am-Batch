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
import EditIcon from '@mui/icons-material/Edit';
import CommonButton from '../../common/Button/CommonButton';
import StudentModal from './StudentModal';
import { API_COMMON_URL } from '../../../Http';
import CommonModal from '../../common/modal/CommonModal';
import { Button } from 'antd';

function TableApi() {
    const [data, setData] = useState([]);
    const [comfirmmationModal,setComfirmattionModal]=useState(false)
    const [openStudentModal, setStudentModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleOpenComfirmationModal=()=>setComfirmattionModal(true);
    const handleCloseComfirmationModal=()=>setComfirmattionModal(false);

    const handleOpen = () => setStudentModal(true);
    const handleClose = () => {
        setStudentModal(false);
        setSelectedRow(null);

    };

    useEffect(() => {
        getStudentdata();
    }, []);

    const getStudentdata = () => {
        axios.get(`${API_COMMON_URL}/StudentsList`)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDelete = (id) => {
         handleOpenComfirmationModal();
            axios.delete(`${API_COMMON_URL}/deleteStudent/${id}`)
                .then((res) => {
                    setData(res.data);
                    getStudentdata();
                })
                .catch((err) => {
                    console.log(err);
                });
      
    };


    const handleEdit = (row) => {
        setSelectedRow(row);
       
        console.log("rowId", row.id);
        handleOpen();
    };

    return (
        <div>
            <div className='text-end m-5'>
                <CommonButton
                    label='+ADD STUDENT'
                    className='bg-black text-white w-36 py-2'
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
                        getStudentdata={getStudentdata}
                        selectedRow={selectedRow}
                      
                        
                    />
                }
            </div>
            <div>
                {
                    comfirmmationModal &&
                    <CommonModal
                    visible={comfirmmationModal}
                    onCancel={handleCloseComfirmationModal}
                    footer={[
                        <Button key="cancel" onClick={handleCloseComfirmationModal}>
                          Cancel
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleCloseComfirmationModal}>
                          OK
                        </Button>,
                      ]}

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
                                        <TableCell>First Name</TableCell>
                                        <TableCell align="right">Last Name</TableCell>
                                        <TableCell align="right">Age</TableCell>
                                        <TableCell align="right">Standard</TableCell>
                                        <TableCell align="right">Percentage</TableCell>
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell component="th">{item.firstName}</TableCell>
                                                <TableCell align="right">{item.lastName}</TableCell>
                                                <TableCell align="right">{item.age}</TableCell>
                                                <TableCell align="right">{item.std}</TableCell>
                                                <TableCell align="right">{item.percentage}</TableCell>
                                                <TableCell align="right">
                                                    <div className='space-x-2'>
                                                        <EditIcon onClick={() => handleEdit(item)} />
                                                        <DeleteIcon onClick={() => handleDelete(item.id)} />
                                                    </div>
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
