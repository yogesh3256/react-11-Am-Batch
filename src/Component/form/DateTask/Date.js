import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, FormControlLabel, Checkbox, Button, InputLabel, FormControl } from '@mui/material';
import CommonTable from '../../common/Table/CommonTable'
import { enqueueSnackbar } from 'notistack';
const ConsultationForm = () => {
    const { control, handleSubmit, reset } = useForm();
    const [consultationData, setConsultationData] = useState([])
    const onSubmit = (data) => {
        // Check if both "From Time" and "To Time" are selected
        if (!data.fromTime || !data.toTime) {
            // Display toast message indicating that both times need to be selected
            enqueueSnackbar(`Please select both From Time and To Time.`, {
                variant: "warning",
                autoHideDuration: 2000,
            });
            return; // Exit the function early if times are not selected
        }

        // Convert selected time strings to Date objects for comparison
        const fromTime = new Date(`2000-01-01T${data.fromTime}`);
        const toTime = new Date(`2000-01-01T${data.toTime}`);

        // Check for overlap with existing time ranges
        const isOverlap = consultationData.some((item) => {
            const itemFromTime = new Date(`2000-01-01T${item.fromTime}`);
            const itemToTime = new Date(`2000-01-01T${item.toTime}`);
            return (
                (fromTime > itemFromTime && fromTime < itemToTime) ||
                (toTime > itemFromTime && toTime < itemToTime) ||
                (fromTime < itemFromTime && toTime > itemToTime)
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
            reset();

            // Display toast message indicating successful addition
            enqueueSnackbar(`Data added successfully.`, {
                variant: "success",
                autoHideDuration: 2000,
            });
        }
    };

    return (
        <>
            <form className='border rounded-lg px-24' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center text-2xl font-semibold text-blue-600'>Manage The Consultation Charges</h1>
                <div className="mx-72">
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <div>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                                <Controller
                                    name="Hospital"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select {...field} label="xyz">
                                            <MenuItem value={'Ten'}>Ten</MenuItem>
                                            <MenuItem value={'Twenty'}>Twenty</MenuItem>
                                            <MenuItem value={'Thirty'}>Thirty</MenuItem>
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormControl fullWidth>
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
                                    <TextField {...field} label="From Time" type="time" fullWidth />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="toTime"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="To Time" type="time" fullWidth />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="consultationCharges"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Consultation Charges" fullWidth />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="FollowUpCharges"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField {...field} label="Follow up Charges" fullWidth />
                                )}
                            />
                        </div>

                        <div className='text-center'>
                            <Controller
                                name="User"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={<Checkbox {...field} />}
                                        label={field.value ? 'Active' : 'Inactive'}
                                    />
                                )}
                            />
                        </div>

                    </div>
                    <div className='text-center mb-3'>
                        <Button type="submit" variant="contained" color="primary">
                            Add
                        </Button>
                    </div>
                </div>
            </form>
            <div>
                <CommonTable DataResult={consultationData} />
            </div>
        </>
    );
};

export default ConsultationForm;
