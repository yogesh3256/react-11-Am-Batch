import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function CommonTextField({ name, control, size, fullWidth, label, defaultValue, className,type }) {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    className={className}
                    type={type}
                    size={size}
                    fullWidth={fullWidth}
                />
            )}
        />
    );
}

export default CommonTextField;
