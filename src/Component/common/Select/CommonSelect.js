import React from 'react';
import Select, { createFilter } from 'react-select';
import { Controller } from 'react-hook-form';

function CommonSelect({
    name,
    control,
    label,
    fullWidth,
    options,
    onChange,
    placeholder,
    className,
    width,
    isClearable,
    defaultValue
}) {
    return (
        <div style={{ width: width }}>
            {control ? (
                <Controller
                    name={name}
                    className={className}
                    label={label}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}
                            onChange={(selectedOption) => field.onChange(selectedOption)}
                            placeholder={placeholder}
                            isClearable={isClearable}
                            fullWidth={fullWidth}
                            menuPlacement=''
                            ref={""}
                            hideSelectedOptions={""}
                            filterOption={createFilter({
                                matchFrom:"start" // "any"
                            })}
                            


                        />
                    )}
                />
            ) : (
                <Select
                    className={className}
                    options={options}
                    onChange={(selectedOption) => onChange(selectedOption)}
                    placeholder={placeholder}
                    isClearable={isClearable}
                    defaultValue={defaultValue}
                    fullWidth={fullWidth}
                />
            )}
        </div>
    );
}

export default CommonSelect;
