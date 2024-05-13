import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { object } from 'yup';





export default function BasicTable({ TableInfo }) {
    let header;
    TableInfo.forEach((list) => {
        return (
            header = object.keys(list)
        )
    })
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            header.map((header) => (
                                <TableCell align="right">{header}</TableCell>
                            ))
                        }
                        {/* <TableCell align="right">Firstname</TableCell>
                        <TableCell align="right">Lastname</TableCell>
                        <TableCell align="right"> Age</TableCell>
                        <TableCell align="right">Phone NO</TableCell> */}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {TableInfo.map((row, index) => (
                        <TableRow
                            key={index}

                        >
                            {header.map((header) => (
                                <TableCell align="right">{row[header]}</TableCell>
                            ))}
                            {/* <TableCell align="right">{row.firstname}</TableCell>
                            <TableCell align="right">{row.lastname}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">{row.no}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}