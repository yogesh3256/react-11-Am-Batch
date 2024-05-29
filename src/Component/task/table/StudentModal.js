import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';
import CommonTextField from '../../common/TextField/CommonTextField';
import { CloseOutlined } from '@ant-design/icons';
import { API_COMMON_URL } from '../../../Http';

function StudentModal({ open, handleClose, getStudentdata, selectedRow, selectedId, setSelectedId }) {
    
   

    const { control, reset, handleSubmit, setValue } = useForm();

    useEffect(() => {
        if (selectedRow) {
            setValue('firstname', selectedRow.firstName);
            setValue('lastname', selectedRow.lastName);
            setValue('age', selectedRow.age);
            setValue('standard', selectedRow.std);
            setValue('percentage', selectedRow.percentage);
            setSelectedId(selectedRow.id);  // Ensure selectedId is set when a row is selected
        } else {
            reset();
        }
    }, [selectedRow, setValue, reset, setSelectedId]);

    const onSubmit = (data) => {
        const tempObj = {
            id: selectedId,
            firstName: data.firstname,
            lastName: data.lastname,
            age: data.age,
            std: data.standard,
            percentage: data.percentage
        };

        if (selectedRow) {
            axios.put(`${API_COMMON_URL}/updateStudent/${selectedId}`, tempObj)
                .then((res) => {
                    console.log(res.data);
                    getStudentdata();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios.post(`${API_COMMON_URL}/student/save`, tempObj)
                .then((res) => {
                    console.log(res.data);
                    getStudentdata();
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        reset();
        handleClose();
        setSelectedId(null);
    };

    return (
        <Modal
            open={open}
            onCancel={handleClose}
            footer={null}
            centered
            closeIcon={<CloseOutlined style={{ color: 'red', fontSize: '16px', border: '1px solid red', borderRadius: '5px', padding: '5px' }} />}
            width={1000}
        >
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-3 gap-4 mt-8'>
                        <div>
                            <CommonTextField
                                name='firstname'
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
                                name='age'
                                control={control}
                                defaultValue=''
                                label='Age'
                                size='small'
                                type='text'
                                fullWidth
                            />
                        </div>
                        <div>
                            <CommonTextField
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
                                name='percentage'
                                control={control}
                                defaultValue=''
                                label='Percentage'
                                size='small'
                                type='text'
                                fullWidth
                            />
                        </div>
                    </div>
                    <div className='text-end mt-3'>
                        <CommonButton
                            label={selectedRow ? 'Update' : 'Add'}
                            type='submit'
                            className='bg-green-500 text-white px-4 font-semibold'
                        />
                    </div>
                </form>
            </Box>
        </Modal>
    );
}

export default StudentModal;
