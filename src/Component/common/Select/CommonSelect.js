import React from 'react';
import Select from 'react-select';
import { Controller } from 'react-hook-form';

function CommonSelect({ name, control, label, fullWidth, value, options, onChange,placeholder,className,width }) {
    return (
        <div style={{width:width  }}>
            {control ? (
                <Controller
                    name={name}
                    className={className}
                    label={label}
                    control={control}
                    defaultValue={value}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}
                            value={value}
                            onChange={(selectedOption) => field.onChange(selectedOption)}
                            placeholder={placeholder}
                            isClearable
                            fullWidth
                        />
                    )}
                />
            ) : (
                <Select
                className={className}
                    value={value}
                    options={options}
                    onChange={(selectedOption) =>onChange(selectedOption)}
                    placeholder={placeholder}
                    isClearable
                    fullWidth={fullWidth}
                />
            )}
        </div>
    );
}

export default CommonSelect;
