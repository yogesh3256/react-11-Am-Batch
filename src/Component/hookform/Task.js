import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from '@mui/icons-material/Edit';
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Task() {
    const schema = yup
        .object({
            firstName: yup.string().required('Please Enter the First Name'),
            middleName: yup.string().required('Please Enter the Middle Name'),
            lastName: yup.string().required('Please Enter the Last Name'),
            address: yup.string().required('Please Enter the Address'),
        })
        .required();

    const {
        reset,      //reset the textfield values after submit
        setValue,    //set a value to the fields
        handleSubmit, //handle the submit provided by hookform\
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const [tableData, setTableData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        if (selectedRow !== null) {
            setValue("firstName", selectedRow.firstName);
            setValue("middleName", selectedRow.middleName);
            setValue("lastName", selectedRow.lastName);
            setValue("address", selectedRow.address);
        }
    }, [selectedRow]);

    const onSubmit = (data) => {
        let tempArr = [...tableData];
        if (selectedRow !== null) {
            // Update the existing row
            const index = tempArr.findIndex((row) => row === selectedRow);
            if (index !== -1) {
                tempArr[index] = data;
                setTableData(tempArr);
            }
            setSelectedRow(null); // Deselect the row after updating
        } else {
            // Add a new row
            tempArr.push(data);
            setTableData(tempArr);
        }
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="my-20 text-center justify-center flex space-x-3">
                    <div>
                        <TextField
                            error={errors?.firstName}
                            helperText={errors?.firstName?.message}
                            label="First Name"
                            size="small"
                            name="firstName"
                            {...register("firstName")}
                        />
                    </div>
                    <TextField
                        label="Middle Name"
                        size="small"
                        name="middleName"
                        {...register("middleName")}
                        error={errors?.middleName}
                        helperText={errors?.middleName?.message}
                    />
                    <div>
                        <TextField
                            label="Last Name"
                            name="lastName"
                            size="small"
                            {...register("lastName")}
                            error={errors?.lastName}
                            helperText={errors?.lastName?.message}
                        />
                    </div>
                    <div>
                        <TextField
                            label="Address"
                            size="small"
                            name="address"
                            {...register("address")}
                            error={errors?.address}
                            helperText={errors?.address?.message}
                        />
                    </div>
                    <Button className="w-16 h-10 px-1 py-1" variant="contained" size="small" type="submit">
                        {selectedRow ? 'Update' : 'Add'}
                    </Button>
                </div>
            </form>
            {tableData.length > 0 ? (
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
                                    key={index}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    onClick={() => setSelectedRow(row)} // Select row for editing
                                    style={{ cursor: 'pointer', background: selectedRow === row ? 'lightblue' : 'inherit' }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.firstName}
                                    </TableCell>
                                    <TableCell>{row.middleName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.address}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" size="small" onClick={() => setSelectedRow(row)}>Edit</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p className="text-center my-28">No Record Found...</p>
            )}
        </div>
    );
}

export default Task;
