import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, InputAdornment } from '@mui/material';
import { BsEyeFill } from "react-icons/bs";
import { IoMdEyeOff } from "react-icons/io";
import CommonButton from '../../common/Button/CommonButton';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function HidePassword() {
    const validationSchema = Yup.object().shape({
        Email: Yup.string().required('Email is required').email('Enter a valid email address'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
            )
    });
    

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='border mx-80 p-4 space-y-3 mt-12'>
                <div>
                    <Controller
                        name='Email'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label='Email'
                                type='email'
                                size='small'
                                fullWidth
                                error={!!errors.Email}
                                helperText={errors.Email ? errors.Email.message : ''}
                            />
                        )}
                    />
                </div>
                <div>
                    <Controller
                        name='password'
                        control={control}
                        defaultValue=''
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label='Password'
                                type={isPasswordVisible ? 'text' : 'password'}
                                size='small'
                                fullWidth
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {isPasswordVisible ? (
                                                <BsEyeFill onClick={() => setIsPasswordVisible(false)} size={24} style={{ cursor: 'pointer' }} />
                                            ) : (
                                                <IoMdEyeOff onClick={() => setIsPasswordVisible(true)} size={24} style={{ cursor: 'pointer' }} />
                                            )}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                    />
                </div>
                <div>
                    
                </div>
                <div className='text-center'>
                    <CommonButton
                        label='Submit'
                        type="submit"
                        className='bg-black text-white w-36'
                    />
                </div>
            </form>
        </div>
    );
}

export default HidePassword;
