import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm } from 'react-hook-form';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';
import CommonTextField from '../../common/TextField/CommonTextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function StudentModal(props) {
    const { control, reset, handleSubmit } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            age: '',
            standard: '',
            percentage: '',
        }
    });

    const onSubmit = (data) => {
        const tempObj = {
            firstName: data.firstname,
            lastName: data.lastname,
            age: parseInt(data.age, 10),  // Convert string to number
            std: data.standard,
            percentage: parseFloat(data.percentage)  // Convert string to number
        };
        console.log("object", tempObj);

        axios.post('http://192.168.0.188:8080/student', tempObj)
            .then((res) => {
                console.log(res.data);
                props.handleClose();  // Close modal after successful submission
            })
            .catch((err) => {
                console.error(err);
            });

        reset();
    };

    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid grid-cols-3 gap-4'>
                            <div>
                                <CommonTextField
                                    name='firstname'
                                    control={control}
                                    label='First Name'
                                    size='small'
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <CommonTextField
                                    name='lastname'
                                    control={control}
                                    label='Last Name'
                                    size='small'
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <CommonTextField
                                    name='age'
                                    control={control}
                                    label='Age'
                                    size='small'
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <CommonTextField
                                    name='standard'
                                    control={control}
                                    label='Standard'
                                    size='small'
                                    fullWidth={true}
                                />
                            </div>
                            <div>
                                <CommonTextField
                                    name='percentage'
                                    control={control}
                                    label='Percentage'
                                    size='small'
                                    fullWidth={true}
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
        </div>
    );
}

export default StudentModal;
