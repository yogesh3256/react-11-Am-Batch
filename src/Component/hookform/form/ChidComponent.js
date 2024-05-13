import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect } from 'react';

import Modal from '@mui/material/Modal';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from '@mui/material';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};

export default function ChildComponent(props) {
    const schema = yup
        .object({
            firstName: yup.string().required('Please Enter the FirstName'),
            middleName: yup.string().required('Please Enter the   middleName'),
            lastName: yup.string().required('Please Enter the FirstName'),
            address: yup.string().required('Please Enter the Address'),
            // age: yup.number().positive().integer().required(),
        })
        .required();

    const {
        reset,      //reset the textfeild values after submit
        setValue,    //set a value to the fields

        getValues,   //get a value from the fields

        watch,   //get the values of onchange not using onchange
        register,  //register  the key 
        handleSubmit, //handle the submit provide by hookform
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        let tempArr = [...props.tableData];
        if (props.selectedRow !== null) {

            const index = tempArr.findIndex((row) => row === props.selectedRow);
            if (index !== -1) {
                tempArr[index] = data;
                props.setTableData(tempArr);
            }
            props.setSelectedRow(null);
        } else {

            tempArr.push(data);
            props.setTableData(tempArr);
        }
        props.handleClose();
        reset();

    };

    useEffect(() => {
        if (props.selectedRow !== null) {
            setValue("firstName", props.selectedRow.firstName)
            setValue("middleName", props.selectedRow.middleName)
            setValue("lastName", props.selectedRow.lastName)
            setValue("address", props.selectedRow.address)

        }
    }, [props.selectedRow])

    return (
        <div>

            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        <div className='flex justify-end'>
                            <button
                                onClick={props.handleClose}
                                type='button' className='text-red-600 border border-red-600 p-1 rounded px-3 text-end '>
                                X
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="my-20 text-center justify-center flex space-x-3">
                                <div>
                                    <TextField
                                        error={errors?.firstName}
                                        helperText={errors?.firstName?.message}
                                        label="First_Name"
                                        size="small"
                                        name="firstName"
                                        {...register("firstName")}
                                    />
                                </div>
                                <TextField
                                    label="Middle_Name"
                                    size="small"
                                    name="middleName"
                                    {...register("middleName")}
                                    error={errors?.middleName}
                                    helperText={errors?.middleName?.message}
                                />
                                <div>
                                    <TextField
                                        label="lastName"
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
                                <Button className="w-16 h-10 px-1.5 py-1" variant="contained" size="small" type="submit">

                                    {props.selectedRow ? 'Update' : 'Add'}
                                </Button>
                            </div>
                        </form>

                    </div>
                </Box>
            </Modal>
        </div>
    );
}