import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonTextField from '../../common/TextField/CommonTextField';
import { CloseOutlined } from '@ant-design/icons';
import { API_COMMON_URL } from '../../../Http';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postStudentData, putStudentData } from '../../Services/Student';
function StudentModal({ open, handleClose, getStudents, selectedRow, formData }) {
    const schemaValidation = yup.object().shape({
        firstname: yup
            .string()
            .required('Firstname is required')
            .min(2, 'Firstname must be at least 2 characters')
            .max(50, 'Firstname cannot be more than 50 characters'),
        lastname: yup
            .string()
            .required('Lastname is required')
            .min(2, 'Lastname must be at least 2 characters')
            .max(50, 'Lastname cannot be more than 50 characters'),
        age: yup
            .number()
            .required('Age is required')
            .min(0, 'Age must be at least 0')
            .max(120, 'Age cannot be more than 120'),
        standard: yup
            .string()
            .required('Standard is required'),
        percentage: yup
            .number()
            .required('Percentage is required')
            .min(0, 'Percentage must be at least 0')
            .max(100, 'Percentage cannot be more than 100')
    });

    const { control, reset, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schemaValidation)
    });

    useEffect(() => {
        if (selectedRow) {
            setValue('firstname', selectedRow.firstName);
            setValue('lastname', selectedRow.lastName);
            setValue('age', selectedRow.age);
            setValue('standard', selectedRow.std);
            setValue('percentage', selectedRow.percentage);
        } else {
            reset();
        }
    }, [selectedRow, setValue, reset]);


    const onSubmit = (data) => {
        const tempObj = {
            firstName: data.firstname.toLowerCase(),
            lastName: data.lastname.toLowerCase(),
            age: data.age,
            std: data.standard.toLowerCase(),
            percentage: data.percentage
        };

        // Check for duplicates
        const isDuplicate = formData.some(student =>
            student.firstName.toLowerCase() === tempObj.firstName &&
            student.lastName.toLowerCase() === tempObj.lastName &&
            (selectedRow ? student.id !== selectedRow.id : true)
        );

        if (isDuplicate) {
            toast.warning("Duplicate entry detected!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "colored"
            });
            return;
        }

        if (selectedRow) {
            putStudentData(selectedRow, tempObj)
                .then((res) => {
                    getStudents();
                    toast.success("Student updated successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        theme: "colored"
                    });
                    handleClose();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            postStudentData(tempObj)
                .then((res) => {
                    getStudents();
                    toast.success("Student added successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        theme: "colored"
                    });
                    handleClose();
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        reset();
    };

    return (
        <Modal
            open={open}
            onCancel={handleClose}
            footer={null}
            centered
            closeIcon={<CloseOutlined
                style={{ color: 'red', fontSize: '16px', border: '1px solid red', borderRadius: '5px', padding: '5px' }}
            />}
            width={1000}
        >
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-3 gap-4 mt-8'>
                        <div>
                            <CommonTextField
                                name='firstname'
                                error={!!errors.firstname}
                                type='text'
                                defaultValue=''
                                control={control}
                                label='First Name'
                                size='small'
                                fullWidth
                                

                            />
                        </div>
                        <div>
                            <CommonTextField
                                error={!!errors.lastname}

                                name='lastname'
                                control={control}
                                defaultValue=''
                                label='Last Name'
                                size='small'
                                type='text'
                                fullWidth

                            />
                        </div>
                        <div>
                            <CommonTextField
                                error={!!errors.age}
                                name='age'
                                control={control}
                                defaultValue=''
                                label='Age'
                                size='small'
                                type='number'
                                fullWidth
                               
                            />
                        </div>
                        <div>
                            <CommonTextField
                                error={!!errors.standard}

                                name='standard'
                                control={control}
                                defaultValue=''
                                label='Standard'
                                size='small'
                                type='text'
                                fullWidth

                            />
                        </div>
                        <div>
                            <CommonTextField
                                error={!!errors.percentage}

                                name='percentage'
                                control={control}
                                defaultValue=''
                                label='Percentage'
                                size='small'
                                type='number'
                                fullWidth

                            />
                        </div>
                    </div>
                    <div className='text-end mt-3'>
                        <CommonButton
                            label={selectedRow ? 'Update' : 'Add'}
                            type='submit'
                            className='bg-green-500 text-white px-1 h-8 w-16 font-semibold rounded'
                        />
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default StudentModal;
