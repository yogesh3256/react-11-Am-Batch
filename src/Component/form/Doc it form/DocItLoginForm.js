import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CommonButton from '../../common/Button/CommonButton';
import axios from 'axios';
import { bloodGroupApi, countriApi, genderApi, isdCodeApi, maritalStatusApi, nationalityApi, prefixApi, } from '../../Services/DocItLoginForm';
import { API_COMMON_URL } from '../../../Http';

const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
];


const PatientRegistrationForm = () => {

    const [ageData, setAgeData] = useState({ age: 0, years: 0, months: 0, days: 0 })
    const [prefix, setPrefix] = useState([])
    const [maritalStatus, setMaritalStatus] = useState([])
    const [bloodGroup, setBloodGroup] = useState([])
    const [gender, setGender] = useState([])
    const [nationality, setNationlity] = useState([])
    const [isd, setIsd] = useState([])
    const [country, setCountry] = useState([])
    const [state, setState] = useState([])
    const [district, setDistrict] = useState([])
    const [taluka, setTaluka] = useState([])
    const [city, setCity] = useState([])
    const [image, setImage] = useState(null);
    // id and values
    const [genderName, setGenderName] = useState({})
    const [prefixId, setPrefixId] = useState({})
    const [marital, setMarital] = useState({})

    const [bloodGroupId, setBloodGroupId] = useState({})
    const [nationalityId, setNationalityId] = useState({})
    const [isdId, setIsdId] = useState({})
    const [countryId, setCountryId] = useState({})
    const [stateId, setStateId] = useState({})
    const [districtId, setDistrictId] = useState({})
    const [talukaId, setTalukaId] = useState({})
    const [cityId, setCityId] = useState({})
    //  
    const schema = yup.object().shape({

        Prefix: yup.string().required(),
        firstname: yup.string().required(),
        middleName: yup.string().required(),
        lastname: yup.string().required(),
        dateofbirth: yup.date().required(),
        isdcode: yup.string().required(),
        mobileno: yup.string().required(),
        email: yup.string().email().required(),
        maritalStatus: yup.string().required(),
        registrationdate: yup.date().required(),
        genderValue: yup.string().required(),
        nationality: yup.string().required(),
        bloodgroup: yup.string().required()

    });
    const { control, handleSubmit, watch, reset, formState: { errors } } = useForm(
        { resolver: yupResolver(schema), }
    );

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


    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const onSubmit = (data) => {
        let tempObj = {
            email: data?.email,
            dob: data?.dateofbirth,
            age: data?.age,
            registrationDate: data?.registrationdate,
            houseNo:data?.houseNo,
            streetAddress:data?.streetaddress,
            prefix: {
                id: prefixId?.id,
                prefixName: prefixId.value
            },
            gender: {
                id: genderName?.id,
                genderName: genderName?.value
            },
            isdCode: {
                id: isdId?.id,
                isdCodeCode: isdId?.value
            },
            nationality: {
                id: nationalityId?.id,
                nationalityName: nationalityId?.value
            },
            bloodGroup: {
                id: bloodGroupId?.id,
                bloodGroupName: bloodGroupId?.value
            },
            maritalStatusId: {
                id: marital?.id,
                maritalStatusName: marital?.value
            },
            country:{
                id:countryId?.id,
                country_name:countryId?.value

            },
            state:{
                id:stateId?.id,
                state_name:stateId?.value

            },
            district:{
                id: districtId?.id,
                district_name:districtId?.value

            },
            taluka:{
                id:talukaId?.id,
                talukaName:talukaId?.value

            },
            city:{
                id:cityId?.id,
                city_name:cityId?.value

            },

           
            fname: data?.firstname,
            mname: data?.middleName,
            lname: data?.lastname,
            mob: data?.mobileno,
        };
        console.log("tempObj", tempObj);



        axios.post(`${API_COMMON_URL}/registration/saveUser`, tempObj)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })




        setAgeData({ age: 0, years: 0, months: 0, days: 0 });
        reset();


    };




    useEffect(() => {
        prefixApi()
            .then((res) => {
                setPrefix(res)
            })
            .catch((err) => {
                console.log(err)
            })

        //maritalstatus api
        maritalStatusApi()
            .then((res) => {
                setMaritalStatus(res)
            })
            .catch((err) => {
                console.log(err)
            })

        // gender Api
        genderApi()
            .then((res) => {
                setGender(res)
            })
            .catch((err) => {
                console.log(err)
            })

        //bloodGropApi
        bloodGroupApi()
            .then((res) => {
                setBloodGroup(res)
            })
            .catch((err) => {
                console.log(err)
            })

        //nationality api
        nationalityApi()
            .then((res) => {
                setNationlity(res)
            })
            .catch((err) => {
                console.log(err)
            })


        isdCodeApi()
            .then((res) => {
                setIsd(res)
            })
            .catch((err) => {
                console.log(err)
            })

        countriApi()
            .then((res) => {
                setCountry(res)
            })
            .catch((err) => {
                console.log(err)
            })


    }, [])

    useEffect(() => {
        if (countryId?.id) {
            axios.get(`${API_COMMON_URL}/fn_state_dropdown/${countryId?.id}`)
                .then((res) => {
                    setState(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [countryId])

    useEffect(() => {
        if (stateId?.id) {
            axios.get(`${API_COMMON_URL}/fnDistrictDropdown/${stateId?.id}`)
                .then((res) => {
                    setDistrict(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [stateId])

    useEffect(() => {
        if (districtId?.id) {
            axios.get(`${API_COMMON_URL}/getTalukaDropdown/${districtId?.id}`)
                .then((res) => {
                    setTaluka(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [districtId]);

    useEffect(() => {
        if (talukaId?.id) {
            axios.get(`${API_COMMON_URL}/getCityDropdown/${talukaId?.id}`)
                .then((res) => {
                    setCity(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [talukaId]);


    const handlePrefix = (value, id) => {
        setPrefixId({ value: value, id: id })
    }


    const handleGender = (value, id) => {
        setGenderName({ value: value, id: id })
    }
    const handlemarital = (value, id) => {
        setMarital({ value: value, id: id })

    }
    const handleBloodGroup = (value, id) => {
        setBloodGroupId({ value: value, id: id })
    }

    const handleNationality = (value, id) => {
        setNationalityId({ value: value, id: id })
    }
    const handleIsdcode = (value, id) => {
        setIsdId({ value: value, id: id })
    }
    const handleCountry = (value, id) => {
        setCountryId({ value: value, id: id })
    }

    const handleState = (value, id) => {
        setStateId({ value: value, id: id })
    }

    const handleDistrict = (value, id) => {
        setDistrictId({ value: value, id: id })
    }
    const handleTaluka = (value, id) => {
        setTalukaId({ value: value, id: id })

    }
    const handleCity = (value, id) => {
        setCityId({ value: value, id: id })

    }
    return (
        <form className=' mx-10 border border-gray-800 p-4 shadow-md' onSubmit={handleSubmit(onSubmit)}>

            <h1 className='font-bold tracking-wide text-lg'>Patient Basic Information</h1>
            <div className=' flex justify-between gap-3 '>
                <div className=''>
                    <div className='grid grid-cols-3  gap-2  '>
                        <div>
                            <Controller
                                name="patientname"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        className='w-full'
                                        {...field}
                                        size='small'
                                        label="Search By Patient Name/UHID/Mobile No."
                                        variant="outlined"
                                        margin="normal"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end"  > 
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        className='w-full'
                                        {...field}
                                        size='small'
                                        error={!!errors.email}
                                        label="Email Id"
                                        variant="outlined"
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
                                        className='w-full'
                                        {...field}
                                        size='small'
                                        label="Registration Date"
                                        error={!!errors.registrationdate}
                                        type="date"
                                        InputLabelProps={{ shrink: true }}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                )}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='flex gap-11'>
                            <div>
                                <FormControl className='w-32' margin="normal" size="small" error={!!errors.Prefix}>
                                    <InputLabel>Prefix*</InputLabel>
                                    <Controller
                                        name="Prefix"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='w-40'
                                                {...field}
                                                label="Prefix*"

                                            >
                                                {prefix?.map(option => (
                                                    <MenuItem onClick={(() => { handlePrefix(option?.value, option?.id) })}
                                                     key={option.id} value={option.value}>
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
                                            className='w-40'
                                            {...field}
                                            size='small'
                                            error={!!errors.firstname}
                                            label="First Name"
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <Controller
                                name="middleName"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        className='w-full'
                                        {...field}
                                        size='small'
                                        error={!!errors.middleName}
                                        label="Middle Name"
                                        variant="outlined"
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
                                        className='w-full'
                                        {...field}
                                        size='small'
                                        label="Last Name"
                                        error={!!errors.lastname}
                                        variant="outlined"
                                        margin="normal"
                                    />
                                )}
                            />
                        </div>

                    </div>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='flex space-x-3'>
                            <div>
                                <Controller
                                    name="dateofbirth"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            className='w-56'
                                            {...field}
                                            size='small'
                                            error={!!errors.dateofbirth}
                                            label="Date Of Birth"
                                            type="date"
                                            InputLabelProps={{ shrink: true }}
                                            variant="outlined"

                                            margin="normal"
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <Controller
                                    name="age"
                                    control={control}
                                   
                                    render={({ field }) => (
                                        <TextField
                                            className='w-24'
                                            {...field}
                                            size='small'
                                            label="Age"
                                            variant="outlined"
                                            margin="normal"
                                            value={ageData.age}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div>
                                <Controller
                                    name="years"
                                    control={control}
                                   
                                    render={({ field }) => (
                                        <TextField
                                            className='w-16'
                                            {...field}
                                            size='small'
                                            label="Years"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={ageData?.years}
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
                                   
                                    render={({ field }) => (
                                        <TextField
                                            className='w-16'

                                            {...field}
                                            size='small'
                                            label="Months"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={ageData?.months}
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
                                    
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            size='small'
                                            label="Days"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            value={ageData?.days}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <FormControl fullWidth margin="normal" size="small" error={!!errors.genderValue}>
                                <InputLabel>Gender*</InputLabel>
                                <Controller
                                    name="genderValue"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            className='w-full'
                                            {...field}
                                            label="gender"
                                        >
                                            {gender?.map(option => (
                                                <MenuItem onClick={(() => { handleGender(option?.value, option?.id) })}
                                                 key={option.id} value={option.value}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>

                        </div>
                    </div>
                    <div className='grid grid-cols-3'>
                        <div className='flex space-x-3'>
                            <div>
                                <FormControl fullWidth margin="normal" size="small" error={!!errors.isdcode}>
                                    <InputLabel>ISD*</InputLabel>
                                    <Controller
                                        name="isdcode"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='w-24'
                                                {...field}
                                                label="ISD*"
                                            >
                                                {isd?.map(option => (
                                                    <MenuItem onClick={(() => { handleIsdcode(option?.value, option?.id) })} 
                                                    key={option.id} value={option.value}>
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
                                    name="mobileno"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            className='w-56'
                                            {...field}
                                            size='small'
                                            error={!!errors.mobileno}
                                            label="Mobile *"
                                            variant="outlined"
                                            margin="normal"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div >
                            <FormControl style={{ width: '21rem' }} margin="normal" size="small" error={!!errors.maritalStatus}>
                                <InputLabel>Marital Status</InputLabel>
                                <Controller
                                    name="maritalStatus"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            label="Marital Status "
                                        >
                                            {maritalStatus?.map(option => (
                                                <MenuItem onClick={(() => { handlemarital(option?.value, option?.id) })}
                                                 key={option.id} value={option.value}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                            </FormControl>
                        </div>
                        <div className='flex ml-1 gap-2'>
                            <div >
                                <FormControl fullWidth margin="normal" size="small" error={!!errors.nationality}>
                                    <InputLabel>Nationality</InputLabel>
                                    <Controller
                                        name="nationality"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='w-64'
                                                {...field}
                                                label="Nationality"
                                            >
                                                {nationality?.map(option => (
                                                    <MenuItem onClick={(() => { handleNationality(option.value, option.id) })} key={option.id} value={option.value}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))}


                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </div>
                            <div>
                                <FormControl fullWidth margin="normal" size='small' error={!!errors.bloodgroup}>
                                    <InputLabel>Blood  Group</InputLabel>
                                    <Controller
                                        name="bloodgroup"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select
                                                className='w-64'
                                                {...field}
                                                label="Blood  Group"
                                            >
                                                {bloodGroup?.map(option => (
                                                    <MenuItem onClick={(() => { handleBloodGroup(option.value, option.id) })} key={option.id} value={option.value}>
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

                </div>

                <div className='*****'>
                    <div className='flex gap-3 mt-4 mb-2'>

                        <div className='border rounded w-44'>
                            <input
                                type='file'
                                accept='image/*'
                                onChange={handleImageChange}
                                style={{ display: 'none' }}
                                id='file-input'
                            />
                            <label htmlFor='file-input'>
                                <img
                                    className='w-[175px] h-[148px] object-cover'
                                    src={image || 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740'}
                                    alt='avatar'
                                    style={{ cursor: 'pointer' }}
                                />
                            </label>
                            <p className='font-medium text-blue-600 text-center'>UPLOAD PROFILE</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>

                    </div>
                </div>
            </div>
            <hr className="border-none mt-4 h-[1px] bg-black" />
            <div>
                <h1 className='font-bold text-lg mt-3 tracking-wide'> Address Details</h1>
                <div className='grid grid-cols-4 gap-2'>
                    <div>
                        <Controller
                            name="houseNo"
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
                                name="country*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="country*"
                                    >
                                        {country?.map(option => (
                                            <MenuItem onClick={(() => { handleCountry(option.value, option.id) })} key={option.id} value={option.value}>
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
                                        {state?.map(option => (
                                            <MenuItem onClick={(() => { handleState(option.value, option.id) })}
                                            key={option.id}  value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth size="small">
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
                                        {district?.map(option => (
                                            <MenuItem onClick={(() => { handleDistrict(option.value, option.id) })} 
                                            key={option.id} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth size="small">
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
                                        {taluka?.map(option => (
                                            <MenuItem onClick={(() => { handleTaluka(option.value, option.id) })}
                                            key={option.id}  value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth size="small">
                            <InputLabel>City *</InputLabel>
                            <Controller
                                name="City"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="City*"
                                    >
                                        {city?.map(option => (
                                            <MenuItem onClick={(() => { handleCity(option.value, option.id) })}
                                            key={option.id}  value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                    <div>
                        <FormControl fullWidth size="small">
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
                                />
                            )}
                        />
                    </div>



                </div>

            </div>


            <div className='text-end mt-3'>
                <CommonButton
                    label='Submit'
                    type='submit'
                    className=' w-32  bg-blue-600 text-white  text-lg font-semibold'
                />
            </div>
        </form>
    );
};

export default PatientRegistrationForm;
