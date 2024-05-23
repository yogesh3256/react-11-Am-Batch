import React from 'react';
import { Modal } from 'antd';
import Box from '@mui/material/Box';
import CommonSelect from '../common/Select/CommonSelect';
import { useForm } from 'react-hook-form';
import CommonTextField from '../common/TextField/CommonTextField';
import CommonButton from '../common/Button/CommonButton';
const weekDaysOptions = [
    { id: 1, value: 'Monday', label: 'Monday' },
    { id: 2, value: 'Tuesday', label: 'Tuesday' },
    { id: 3, value: 'Wednesday', label: 'Wednesday' },
    { id: 4, value: 'Thursday', label: 'Thursday' },
    { id: 5, value: 'Friday', label: 'Friday' },
    { id: 6, value: 'Saturday', label: 'Saturday' },
    { id: 7, value: 'Sunday', label: 'Sunday' }
];
function DependantDropDown(props) {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <Modal
                open={props.open}
                width={1000}
                onCancel={props.handleClose}
                footer={null}
            >
                <Box>
                    <div className='mt-7'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-3 gap-3'>
                                <div>
                                    <CommonSelect
                                        name='country'
                                        control={control}
                                        options={weekDaysOptions}
                                        label="Country"
                                        isClearable={true}
                                        placeholder='Select the Country'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='state'
                                        control={control}
                                        label="State"
                                        isClearable={true}
                                        placeholder='Select the State'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='district'
                                        control={control}
                                        label="District"
                                        isClearable={true}
                                        placeholder='Select the District'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='tal'
                                        control={control}
                                        label="Tal"
                                        isClearable={true}
                                        placeholder='Select the Tal'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='city'
                                        control={control}
                                        label="City"
                                        isClearable={true}
                                        placeholder='Select the City'
                                    />
                                </div>
                                <div>
                                    <CommonTextField
                                        name='textField'
                                        control={control}
                                        label="Text Field"
                                        size='small'
                                        
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                            <div className='text-end mt-3'>
                                <CommonButton
                                    label="Save"
                                    type="submit"
                                    className='bg-green-500 text-white w-16 '
                                />
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DependantDropDown;
