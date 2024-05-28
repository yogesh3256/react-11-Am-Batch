import React from 'react';
import Box from '@mui/material/Box';
import { Modal } from 'antd';
import { useForm } from 'react-hook-form';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';
import CommonTextField from '../../common/TextField/CommonTextField';
import { CloseOutlined } from '@ant-design/icons';

 
function StudentModal(props) {
    const { control, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const tempObj = {
            firstName: data?.firstname,
            lastName: data?.lastname,
            age: data?.age,
            std: data?.standard,
            percentage: data?.percentage
        };

        console.log("object to be sent", tempObj);

        axios.post('http://192.168.52.12:8080/student/save', tempObj)
            .then((res) => {
                console.log(res.data);
                props.getStudentdata();
            })
            .catch((err) => {
                console.log(err);
            });

        reset();
        props.handleClose();
    };

    return (
        <Modal
            open={props.open}
            onCancel={props.handleClose}
            footer={null}
            centered
            closeIcon={<CloseOutlined style={{ color: 'red', fontSize: '16px',border:'1px solid red', borderRadius:'5px' ,padding: '5px' }} />}
            width={1000}
        >
            <Box >
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
                            label='Save'
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
