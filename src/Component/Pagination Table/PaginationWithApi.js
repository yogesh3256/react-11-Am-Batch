import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_COMMON_URL } from '../../Http';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';

function PaginationWithApi() {
    const [totalData,setTotalData]=useState([]);
    console.log("totalData",totalData);
    const [formData, setFormData] = useState([]);
    const [formDataHeaders, setFormDataHeaders] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [totalItems, setTotalItems] = useState(0); // Initialize with 0

    useEffect(() => {
        fetchData();

    }, [page, limit]);

    const fetchData = () => {
        axios.get(`${API_COMMON_URL}/getPaginatedStudents?pageNumber=${page}&pageSize=${limit}`)
            .then((res) => {
                if (res.data) {
                    setFormData(res.data);
                    if (res.data.length > 0) {
                        const headers = Object.keys(res.data[0]);
                        setFormDataHeaders(headers);
                    } else {
                        setFormDataHeaders([]);
                    }
                    // Set total items from API response
                    setTotalItems(parseInt(res.headers['x-total-count'], 10)); // Parse total count to integer
                } else {
                    setFormData([]);
                    setFormDataHeaders([]);
                    setTotalItems(0);
                }
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setFormData([]);
                setFormDataHeaders([]);
                setTotalItems(0);
            });
    };
    useEffect(() => {

        axios.get(`${API_COMMON_URL}/getPaginatedStudents`)
            .then((res) => {
                console.log(res.data);
                setTotalData(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })

    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage + 1); // newPage is zero-based, adjust to 1-based
    };

    const handleChangeRowsPerPage = (event) => {
        const newLimit = parseInt(event.target.value, 10);
        setLimit(newLimit);
        setPage(1); // Reset page to 1 when changing rows per page
    };

    const pageCount = Math.ceil(totalItems / limit); // Calculate total pages

    return (
        <div>
            <Paper>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {formDataHeaders.map((header) => (
                                    <TableCell key={header}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formData.map((row, index) => (
                                <TableRow key={index}>
                                    {formDataHeaders.map((header) => (
                                        <TableCell key={header}>{row[header]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={totalItems} // Total items from API response
                    page={page - 1} // Material-UI pagination uses zero-based index
                    onPageChange={handleChangePage}
                    rowsPerPage={limit} // Current rows per page
                    rowsPerPageOptions={[2, 5, 10, 20]} // Options for rows per page
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default PaginationWithApi;
