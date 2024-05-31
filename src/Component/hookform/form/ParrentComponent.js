import React from 'react';
import { useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ChildComponent from './ChidComponent';

function ParrentComponemt() {
    const [tableData, setTableData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [openChildComponent, setOpenChildComponent] = useState(false);

    const handleDelete = (index) => {
        if (window.confirm("Are You Sure To Delete This Data....")) {
            const updatedTableData = [...tableData];
            updatedTableData.splice(index, 1);
            setTableData(updatedTableData);
        }

    };

    return (
        <div>
            <div className='py-5 text-end mr-3'>
                <Button type='button' variant='contained' onClick={() => setOpenChildComponent(true)}>
                    Add New
                </Button>
            </div>
            {
                tableData.length > 0 ? (
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{ background: "lightgray" }}>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Middle Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData.map((row, index) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{row.firstName}</TableCell>
                                        <TableCell>{row.middleName}</TableCell>
                                        <TableCell>{row.lastName}</TableCell>
                                        <TableCell>{row.address}</TableCell>
                                        <TableCell>
                                            <button className=' flex gap-2'>
                                                <EditIcon onClick={() => { setOpenChildComponent(true); setSelectedRow(row); }} />
                                                <DeleteIcon onClick={() => handleDelete(index)} />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <p className="text-center  my-28">No Record Found...</p>
                )
            }
            <ChildComponent
                open={openChildComponent}
                handleClose={() => setOpenChildComponent(false)}
                setTableData={setTableData}
                tableData={tableData}
                selectedRow={selectedRow}
                setSelectedRow={setSelectedRow}
            />
        </div>
    );
}

export default ParrentComponemt;
