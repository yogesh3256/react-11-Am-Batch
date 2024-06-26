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
import CommonModal from '../../common/modal/CommonModal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteStudent, getStudentdata } from '../../Services/Student';

function TableApi() {
    const [formData, setFormData] = useState([]);
    const [openStudentModal, setOpenStudentModal] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [confirmationModal, setConfirmationModal] = useState(false);
    const [selectedRowIdToDelete, setSelectedRowIdToDelete] = useState(null);

    useEffect(() => {
        getStudents()
    }, []);
    const getStudents = () => {
        getStudentdata()
            .then((res) => {
                setFormData(res);

            })
            .catch((err) => {
                console.log(err);
            });
    }
    const handleEdit = (row) => {
        setSelectedRow(row);
        setOpenStudentModal(true);
    };

    const handleDelete = (id) => {
        setSelectedRowIdToDelete(id);
        setConfirmationModal(true);
    };

    const handleConfirmDelete = () => {
        deleteStudent(selectedRowIdToDelete)
            .then((res) => {
                let filteredData = formData.filter(item => item.id !== selectedRowIdToDelete)
                setFormData(filteredData)
                setConfirmationModal(false);
                toast.success("Student deleted successfully!", {
                    position: "top-right", // Example: Change position
                    autoClose: 3000, // Example: Close after 3 seconds
                    hideProgressBar: false, // Example: Hide progress bar
                    closeOnClick: true, // Example: Close on click
                    pauseOnHover: true, // Example: Pause on hover
                    draggable: false, // Example: Disable dragging  
                    theme: "colored",

                });
            })
            .catch((err) => {
                console.log(err);

            });
    };

    const handleCloseConfirmationModal = () => {
        setConfirmationModal(false);
        setSelectedRowIdToDelete(null); // Reset selected row ID
    };

    const handleCloseStudentModal = () => {
        setOpenStudentModal(false);
        setSelectedRow(null);
    };

    return (
        <div>

            <div className='text-end m-5'>
                <CommonButton
                    label='+ADD'
                    className='bg-black text-white px-2 h-9  w-16 rounded'
                    type='button'
                    onClick={() => setOpenStudentModal(true)}
                />
            </div>

            {openStudentModal && (
                <StudentModal
                    open={openStudentModal}
                    handleClose={handleCloseStudentModal}
                    getStudents={getStudents}
                    selectedRow={selectedRow}
                    formData={formData}
                />
            )}

            {confirmationModal && (
                <CommonModal
                    open={confirmationModal}
                    onCancel={handleCloseConfirmationModal}
                    width="500px"
                    content={"Are you Sure to Delete the Item.."}
                    footer={[
                        <CommonButton
                            label='Cancel' onClick={handleCloseConfirmationModal}
                            className='bg-red-500 text-white px-1 py-1 rounded h-8 w-16 mr-3'

                        />
                        ,
                        <CommonButton
                            label='Ok' onClick={handleConfirmDelete}
                            className='bg-green-600 text-white px-1 py-1  rounded h-8 w-16'

                        />
                    ]}
                />
            )}

            {formData.length > 0 ? (
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
                            {formData.map((item) => (
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
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <h1 className='text-center font-bold text-2xl'>NO records found....</h1>
            )}
        </div>
    );
}

export default TableApi;
