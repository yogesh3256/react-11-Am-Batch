import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function CommonTextField({
  name,
  control,
  size,
  fullWidth,
  label,
  value,
  className,
  type,
  inputProps,
  onChange,
  autoFocus,
  InputLabelProps
  
}) {
  return control ? (
    <Controller
      name={name}
      control={control}
      value={value}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          className={className}
          type={type}
          size={size}
          fullWidth={fullWidth}
          inputProps={inputProps}
          InputLabelProps={InputLabelProps}
          autoFocus={autoFocus}
        />
      )}
    />
  ) : (
    <TextField
      name={name}
      label={label}
      className={className}
      type={type}
      size={size}
      onChange={onChange}
      fullWidth={fullWidth}
       value={value}
      inputProps={inputProps}
    />
  );
}

export default CommonTextField;
