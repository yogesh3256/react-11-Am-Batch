import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { fetchData } from '../Services/PaginationTable';

function PaginationWithApi() {
    const [formData, setFormData] = useState([]);
    console.log("formData", formData);
    const [formDataHeaders, setFormDataHeaders] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(2);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        fetchData({ page, limit })
            .then((res) => {
                if (res) {
                    setFormData(res.paginatedStudents);
                    const headers = res.paginatedStudents.length > 0 ? Object.keys(res.paginatedStudents[0]) : [];
                    setFormDataHeaders(headers);
                    setTotalItems(res.studentCount)
                }else{
                    setFormData([]);
                    setFormDataHeaders([]);
                    setTotalItems(0)
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }, [page, limit]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        const newLimit = parseInt(event.target.value);
        setLimit(newLimit);
        setPage(0);
    };

    return (
        <div>
            {formData.length > 0 ? (
                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {formDataHeaders.map((header) => (
                                        header !== 'id' && (
                                            <TableCell className='bg-gray-200' key={header}>
                                                {header}
                                            </TableCell>
                                        )
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {formData.map((row, index) => (
                                    <TableRow key={index}>
                                        {formDataHeaders.map((header) => (
                                            header !== 'id' && (
                                                <TableCell key={header}>{row[header]}</TableCell>
                                            )
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </TableContainer>
                    <TablePagination
                        component="div"
                        count={totalItems}
                        page={page}
                        onPageChange={handleChangePage}
                        rowsPerPage={limit}
                        rowsPerPageOptions={[2, 5, 7, 9]}
                        onRowsPerPageChange={handleChangeRowsPerPage}

                    />
                </Paper>
            ) : (
                <h1 className='font-semibold text-xl text-center my-24'>No Records Found....</h1>
            )}
        </div>
    );
}

export default PaginationWithApi;
