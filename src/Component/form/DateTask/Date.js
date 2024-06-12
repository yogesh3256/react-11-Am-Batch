import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControlLabel, Checkbox, Button, InputLabel, FormControl } from '@mui/material';
import CommonTable from '../../common/Table/CommonTable'
import { format, parse, compareAsc } from 'date-fns';
import { enqueueSnackbar } from 'notistack';
import { memo } from 'react';
import CommonButton from '../../common/Button/CommonButton';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

const schemaValidation = yup.object().shape({
    Hospital: yup.string().required(),
    weekDay: yup.string().required(),
    fromTime: yup.string().required(),
    toTime: yup.string().required(),
    consultationCharges: yup
        .number()
        .typeError('Consultation Charges must be a number')
        .required('Consultation Charges is required')
        .positive('Consultation Charges must be a positive number'),
    FollowUpCharges: yup
        .number()
        .typeError('Follow-up Charges must be a number')
        .required('Follow-up Charges is required')
        .positive('Follow-up Charges must be a positive number'),
    User: yup.boolean().required(),
});

const ConsultationForm = () => {
    const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm({ resolver: yupResolver(schemaValidation) });
    const [consultationData, setConsultationData] = useState([])
    const [userChecked, setUserChecked] = useState(false);


    const onSubmit = (data) => {
        const { consultationCharges, FollowUpCharges } = data;

        // Check if both "From Time" and "To Time" are selected
        if (!data.fromTime || !data.toTime) {
            // Display toast message indicating that both times need to be selected
            enqueueSnackbar(`Please select both From Time and To Time.`, {
                variant: "warning",
                autoHideDuration: 2000,
            });
            return; // Exit the function early if times are not selected
        }

        // Convert selected time strings to Date objects
        const fromTime = parse(data.fromTime, 'HH:mm', new Date());
        const toTime = parse(data.toTime, 'HH:mm', new Date());

        // Check for overlap with existing time ranges
        const isOverlap = consultationData.some((item) => {
            const itemFromTime = parse(item.fromTime, 'HH:mm', new Date());
            const itemToTime = parse(item.toTime, 'HH:mm', new Date());
            return (
                (compareAsc(fromTime, itemFromTime) === 1 && compareAsc(fromTime, itemToTime) === -1) ||
                (compareAsc(toTime, itemFromTime) === 1 && compareAsc(toTime, itemToTime) === -1) ||
                (compareAsc(fromTime, itemFromTime) === -1 && compareAsc(toTime, itemToTime) === 1)
            );
        });

        if (isOverlap) {
            // Display toast message indicating time slot is already taken
            enqueueSnackbar(`This time slot is already taken.`, {
                variant: "warning",
                autoHideDuration: 2000,
            });
        } else {
            // If no overlap, add data to consultationData
            let tempData = [...consultationData];
            tempData.push(data);
            setConsultationData(tempData);

            // Calculate total charges
            const totalCharges = parseInt(consultationCharges) + parseInt(FollowUpCharges);
            data.totalCharges = totalCharges;

            // Reset the form, including unchecking the checkbox
            reset();
            setUserChecked(false)

            // Display toast message indicating successful addition
            enqueueSnackbar(`Data added successfully.`, {
                variant: "success",
                autoHideDuration: 2000,
            });
        }
    };

    return (
        <>
            <form className='border rounded-lg  py-6 mx-32' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center text-2xl font-semibold text-blue-600'>Manage The Consultation Charges</h1>
                <div className="mx-72">
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <div>
                            <FormControl fullWidth error={!!errors.Hospital}   >
                                <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                                <Controller
                                    name="Hospital"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Hospital">
                                            <MenuItem value={'kothrud Hospital'}>kothrud Hospital</MenuItem>
                                            <MenuItem value={'sayhadri Hospital'}>sayhadri Hospital</MenuItem>
                                            <MenuItem value={'Ruby Hospital'}>Ruby Hospital</MenuItem>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormControl fullWidth error={!!errors.weekDay} >
                                <InputLabel id="demo-simple-select-label">Week Day</InputLabel>
                                <Controller
                                    name="weekDay"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="Week Day">
                                            <MenuItem value={'MonDay'}>MonDay</MenuItem>
                                            <MenuItem value={'TuesDay'}>TuesDay</MenuItem>
                                            <MenuItem value={'WednesDay'}>WednesDay</MenuItem>
                                            <MenuItem value={'ThusDay'}>ThusDay</MenuItem>
                                            <MenuItem value={'FriDay'}>FriDay</MenuItem>
                                            <MenuItem value={'SaturDay'}>SaturDay</MenuItem>
                                            <MenuItem value={'SunDay'}>SunDay</MenuItem>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <Controller
                                name="fromTime"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="From Time" type="time" fullWidth error={!!errors.fromTime} />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="toTime"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="To Time" type="time" fullWidth error={!!errors.toTime} />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="consultationCharges"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Consultation Charges" fullWidth error={!!errors.consultationCharges} />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="FollowUpCharges"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Follow up Charges" fullWidth error={!!errors.FollowUpCharges} />
                                )}
                            />
                        </div>

                        <div className='text-center'>
                            <Controller
                                name="User"
                                control={control}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox {...field} checked={field.value} />}
                                        label={field.value ? 'Active' : 'Inactive'}
                                    />
                                )}
                            />

                        </div>

                    </div>
                    <div className='text-center mb-3'>
                        <CommonButton
                            label='+ADD'
                            type='submit'
                            className='bg-blue-500 text-white px-1 w-20 font-semibold'
                        />
                    </div>
                </div>
            </form>
            <div>
                <CommonTable DataResult={consultationData} />
            </div>
        </>
    );
};

export default memo(ConsultationForm);
