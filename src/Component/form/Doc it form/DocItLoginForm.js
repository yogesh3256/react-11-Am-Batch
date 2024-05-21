import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import dayjs from 'dayjs';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
];

const PatientRegistrationForm = () => {
    const { control, handleSubmit, watch, reset } = useForm();
    const [ageData, setAgeData] = useState({ age: 0, years: 0, months: 0, days: 0 })
    const [prefix, setPrefix] = useState([])
    const [maritalStatus, setMaritalStatus] = useState([])
    const [bloodGroup, setBloodGroup] = useState([])
    const [ gender,  setGender] = useState([])

    const calculateAge = (dob, currentDate) => {
        const birthDate = dayjs(dob);
        const years = currentDate.diff(birthDate, 'year');
        const months = currentDate.diff(birthDate.add(years, 'year'), 'month');
        const days = currentDate.diff(birthDate.add(years, 'year').add(months, 'month'), 'day');

        setAgeData({ age: years, years, months, days });
    };

    const dateOfBirth = watch("dateofbirth", "");

    useEffect(() => {
        if (dateOfBirth) {
            const currentDate = dayjs();
            calculateAge(dateOfBirth, currentDate);
        }
    }, [dateOfBirth]);

    const onSubmit = data => {
        console.log(data);

        reset();


    };




    useEffect(() => {
        axios.get('http://192.168.0.85:8081/getPrefixDropDown')
            .then((res) => {
                setPrefix(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        axios.get('http://192.168.0.85:8081/getMaritalStatusDropDown')
            .then((res) => {
                setMaritalStatus(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('http://192.168.0.85:8081/getBloodGroupDropDown')
            .then((res) => {
                setBloodGroup(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        axios.get('http://192.168.0.85:8081/getGender')
            .then((res) => {
                 setGender(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <form className='mx-16 border border-gray-800 p-4 shadow-md' onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-3 gap-2'>
                <div>
                    <Controller
                        name="patientname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Search By Patient Name/UHID/Mobile No."
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="emailId"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Email Id"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="registrationdate"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Registration Date"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                <div>
                    <FormControl fullWidth margin="normal" size="small">
                        <InputLabel>Prefix*</InputLabel>
                        <Controller
                            name="Prefix*"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    label="Prefix*"
                                >
                                    {prefix?.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
                <div>
                    <Controller
                        name="firstname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="middleName"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Middle Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="lastname"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                    <Controller
                        name="dateofbirth"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                sx={{ width: '250px' }}
                                {...field}
                                size='small'
                                label="Date Of Birth"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="age"
                        control={control}
                        defaultValue="0"
                        render={({ field }) => (
                            <TextField
                                sx={{ width: '120px' }}
                                {...field}
                                size='small'
                                label="Age"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={ageData.age}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="years"
                        control={control}
                        defaultValue="0"
                        render={({ field }) => (
                            <TextField
                                sx={{ width: '120px' }}
                                {...field}
                                size='small'
                                label="Years"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={ageData.years}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="months"
                        control={control}
                        defaultValue="0"
                        render={({ field }) => (
                            <TextField
                                sx={{ width: '120px' }}
                                {...field}
                                size='small'
                                label="Months"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={ageData.months}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name="days"
                        control={control}
                        defaultValue="0"
                        render={({ field }) => (
                            <TextField
                                sx={{ width: '120px' }}
                                {...field}
                                size='small'
                                label="Days"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                value={ageData.days}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        )}
                    />
                </div>
                <div className='flex gap-2 mb-4'>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel> Gender*</InputLabel>
                            <Controller
                                name=" Gender *"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        sx={{ width: '250px' }}
                                        {...field}
                                        label="Gender*"
                                    >
                                        {gender?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>


                </div>

            </div>
            <div className='flex gap-2'>
                <div>
                    <FormControl fullWidth margin="normal" size="small">
                        <InputLabel>ISD*</InputLabel>
                        <Controller
                            name=" contrycode *"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    sx={{ width: '120px' }}
                                    {...field}
                                    label="ISD*"
                                >
                                    <MenuItem>+91</MenuItem>
                                    {genderOptions?.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
                <div>
                    <Controller
                        name="mobileno"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                size='small'
                                label="Mobile *"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                            />
                        )}
                    />
                </div>
                <div>
                    <FormControl fullWidth margin="normal" size="small">
                        <InputLabel>Marital Status</InputLabel>
                        <Controller
                            name="maritalStatus"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    sx={{ width: '250px' }}
                                    {...field}
                                    label="Marital Status "
                                >
                                    {maritalStatus?.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth margin="normal" size="small">
                        <InputLabel>Nationality</InputLabel>
                        <Controller
                            name="nationality"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    sx={{ width: '250px' }}
                                    {...field}
                                    label="Nationality"
                                >

                                    <MenuItem value={'india'}>
                                        India
                                    </MenuItem>

                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl fullWidth margin="normal" size='small'>
                        <InputLabel>Blood  Group</InputLabel>
                        <Controller
                            name="blopdgroup"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <Select
                                    sx={{ width: '250px' }}
                                    {...field}
                                    label="Blood  Group"
                                >
                                    {bloodGroup?.map(option => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        />
                    </FormControl>
                </div>
            </div>
            <div>
                <h1 className='font-bold'> Address Details</h1>
                <div className='grid grid-cols-4 gap-2'>
                    <div>
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size='small'
                                    label="House No./Flat NO./Building Name"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <Controller
                            name="streetaddress"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size='small'
                                    label="Street Address"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel> Contry *</InputLabel>
                            <Controller
                                name="contry*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="contry*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>State *</InputLabel>
                            <Controller
                                name="State*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="State*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel> District*</InputLabel>
                            <Controller
                                name="District*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="District*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <Controller
                            name="pincode"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size='small'
                                    label="PinCode"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                />
                            )}
                        />
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>Area *</InputLabel>
                            <Controller
                                name="Area*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="Area*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel> Taluka *</InputLabel>
                            <Controller
                                name="Taluka*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="Taluka*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth margin="normal" size="small">
                            <InputLabel>City *</InputLabel>
                            <Controller
                                name="City*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="City*"
                                    >
                                        {genderOptions?.map(option => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                </div>

            </div>


            <div className='text-center'>
                <CommonButton
                    label='Submit'
                    type='submit'
                    className=' w-32  bg-blue-600 text-white text-center'
                />
            </div>
        </form>
    );
};

export default PatientRegistrationForm;
