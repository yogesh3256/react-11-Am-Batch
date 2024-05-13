import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function CommonTextField({ name, control, size, fullWidth, label,defaultValue, value,onchange }) {
    return (
        <Controller
            name={name}
            onChange={onchange}
            defaultValue={defaultValue}
            control={control}
            value={value}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    size={size}
                    fullWidth={fullWidth}
                />
            )}
        />
    );
}

export default CommonTextField;
