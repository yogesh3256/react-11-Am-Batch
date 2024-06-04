import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, InputLabel, MenuItem, Select, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import dayjs from 'dayjs';
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
    const { control, handleSubmit, watch, reset } = useForm();
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

    const onSubmit = (data) => {
        let tempObj = {
            email: data?.email,
            dob: data?.dateofbirth,
            age: data?.age,
            prefix: {
                id: prefixId?.id,
                prefix: prefixId.value
            },
            gender: {
                id: genderName?.id,
                genderName: genderName?.value
            },
            isdCode: {
                id: isdId?.id,
                isdCode: isdId?.value
            },
            nationality: {
                id: nationalityId?.id,
                nationality: nationalityId?.value
            },
            bloodGroup: {
                id: bloodGroupId?.id,
                bloodGroup: bloodGroupId?.value
            },
            maritalStatus: {
                id: marital?.id,
                maritalStatus: marital?.value
            },
            // city: {
            //     id: cityId?.id,
            //     city_name: cityId?.value,
            //     pin_code: data?.pincode,
            //     taluka: {
            //         id: talukaId?.id,
            //         talukaName: talukaId?.value,
            //         districtTable: {
            //             id: districtId?.id,
            //             district_name: districtId?.value,
            //             stateTable: {
            //                 id: stateId?.id,
            //                 state_name: stateId?.value,
            //                 countryTable: {
            //                     id: countryId?.id,
            //                     country_name: countryId?.value,
            //                 }
            //             }
            //         }
            //     }
            // },
            fname: data?.firstname,
            mname: data?.middleName,
            lname: data?.lastname,
            mob: data?.mobileno,
        };
console.log("tempObj",tempObj);



        axios.post(`${API_COMMON_URL}/registration/saveUser`, tempObj)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err)
            })





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
            <h1 className='font-bold'>Patient Basic Information</h1>
            <div className='grid grid-cols-3 gap-3 '>
                <div>
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
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
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
                                                <MenuItem onClick={(() => { handlePrefix(option?.value, option?.id) })} key={option.value} value={option.value}>
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
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <Controller
                                name="dateofbirth"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <TextField
                                        sx={{ width: '300px' }}
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
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '30% 66.6%', columnGap: '10px' }}>
                        <div>
                            <FormControl fullWidth margin="normal" size="small">
                                <InputLabel>ISD*</InputLabel>
                                <Controller
                                    name="isdcode*"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            label="ISD*"
                                        >
                                            {isd?.map(option => (
                                                <MenuItem onClick={(() => { handleIsdcode(option?.value, option?.id) })} key={option.value} value={option.value}>
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
                                        fullWidth
                                        {...field}
                                        size='small'
                                        label="Mobile *"
                                        variant="outlined"
                                        margin="normal"
                                    />
                                )}
                            />
                        </div>
                    </div>

                </div>
                <div className='second_2  '>
                    <div>
                        <Controller
                            name="email"
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
                    <div className=' grid grid-cols-3 gap-2'>
                        <div>
                            <Controller
                                name="years"
                                control={control}
                                defaultValue="0"
                                render={({ field }) => (
                                    <TextField

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

                                        {...field}
                                        label="Marital Status "
                                    >
                                        {maritalStatus?.map(option => (
                                            <MenuItem onClick={(() => { handlemarital(option.value, option.id) })} key={option.value} value={option.value}>
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                )}
                            />
                        </FormControl>
                    </div>
                </div>
                <div className='*****'>
                    <div className='flex gap-3'>
                        <div>
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
                            <div>
                                <FormControl fullWidth margin="normal" size="small">
                                    <InputLabel> Gender*</InputLabel>
                                    <Controller
                                        name=" Gender *"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <Select

                                                {...field}
                                                label="Gender*"
                                            >
                                                {gender?.map(option => (
                                                    <MenuItem onClick={(() => { handleGender(option.value, option.id) })} key={option.value} value={option.value}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                </FormControl>
                            </div>
                        </div>
                        <div className='border '>
                            <img className='w-[160px]' src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740'
                                alt='avatar' />
                            <p className='  font-medium text-blue-600 text-center'>UPLOAD PROFILE</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div >
                            <FormControl fullWidth margin="normal" size="small">
                                <InputLabel>Nationality</InputLabel>
                                <Controller
                                    name="nationality"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <Select

                                            {...field}
                                            label="Nationality"
                                        >
                                            {nationality?.map(option => (
                                                <MenuItem onClick={(() => { handleNationality(option.value, option.id) })} key={option.value} value={option.value}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}


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

                                            {...field}
                                            label="Blood  Group"
                                        >
                                            {bloodGroup?.map(option => (
                                                <MenuItem onClick={(() => { handleBloodGroup(option.value, option.id) })} key={option.value} value={option.value}>
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
            <hr className="border-none mt-4 h-[1px] bg-black" />
            {/* <div>
                <h1 className='font-bold mt-3'> Address Details</h1>
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
                                name="country*"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="country*"
                                    >
                                        {country?.map(option => (
                                            <MenuItem onClick={(() => { handleCountry(option.value, option.id) })} value={option.value}>
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
                                            <MenuItem onClick={(() => { handleState(option.value, option.id) })} value={option.value}>
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
                                        {district?.map(option => (
                                            <MenuItem onClick={(() => { handleDistrict(option.value, option.id) })} value={option.value}>
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
                                        {taluka?.map(option => (
                                            <MenuItem onClick={(() => { handleTaluka(option.value, option.id) })} value={option.value}>
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
                                name="City"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        label="City*"
                                    >
                                        {city?.map(option => (
                                            <MenuItem onClick={(() => { handleCity(option.value, option.id) })} value={option.value}>
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
                                    margin="normal"
                                />
                            )}
                        />
                    </div>



                </div>

            </div> */}


            <div className='text-center mt-3'>
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
