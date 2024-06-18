import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function CommonTextField({
  name,
  control,
  size,
  fullWidth,
  label,
  value,  // Ensure this is defined
  className,
  type,
  inputProps,
  onChange,
  autoFocus,
  InputLabelProps,
  error,
  onBlur,
  sx
}) {
  return control ? (
    <Controller
      name={name}
      control={control}
      defaultValue={value || ''}  // Set a default value for controlled input
      render={({ field }) => (
        <TextField
          {...field}
          error={error}
          label={label}
          className={className}
          type={type}
          size={size}
          sx={{
            '& input[type=number]': {
                '-moz-appearance': 'textfield', // Firefox
            },
            '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none', // Chrome, Safari, Edge, Opera
                margin: 0,
            },
        }}
          onBlur={onBlur}
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
      value={value || ''}  // Ensure value is defined
      inputProps={inputProps}
    />
  );
}

export default CommonTextField;
