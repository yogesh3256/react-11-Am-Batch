import React from 'react';
import Select, { createFilter } from 'react-select';
import { Controller } from 'react-hook-form';

function CommonSelect({
    name,
    control,
    label,
    fullWidth = false,
    options = [],
    onChange,
    placeholder = 'Select...',
    className,
    width = '100%',
    isClearable = false,
    defaultValue,
    menuPlacement = 'auto',
    ref, // ref should be handled by the Controller
    hideSelectedOptions = false,
    filterOption = createFilter({ matchFrom: 'start' }),
    isDisabled = false,
    isLoading = false,
    isMulti = false,
    noOptionsMessage = () => 'No options available',
    loadingMessage = () => 'Loading...'
}) {
    return (
        <div style={{ width: width }}>
            {control ? (
                <Controller
                    name={name}
                    control={control}
                    label={label}
                    defaultValue={defaultValue}
                    render={({ field }) => (
                        <Select
                            {...field}
                            options={options}
                            onChange={(selectedOption) => {
                                field.onChange(selectedOption);
                                if (onChange) onChange(selectedOption);
                            }}
                            placeholder={placeholder}
                            isClearable={isClearable}
                            menuPlacement={menuPlacement}
                            ref={field.ref} // ref should be handled by the Controller
                            hideSelectedOptions={hideSelectedOptions}
                            filterOption={filterOption}
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                            isMulti={isMulti}
                            noOptionsMessage={noOptionsMessage}
                            loadingMessage={loadingMessage}
                            className={className}
                            styles={{ container: (provided) => ({ ...provided, width: fullWidth ? '100%' : width }) }}
                        />
                    )}
                />
            ) : (
                <Select
                    className={className}
                    options={options}
                    label={label}
                    onChange={(selectedOption) => onChange && onChange(selectedOption)}
                    placeholder={placeholder}
                    isClearable={isClearable}
                    defaultValue={defaultValue}
                    menuPlacement={menuPlacement}
                    ref={ref}
                    hideSelectedOptions={hideSelectedOptions}
                    filterOption={filterOption}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isMulti={isMulti}
                    noOptionsMessage={noOptionsMessage}
                    loadingMessage={loadingMessage}
                    styles={{ container: (provided) => ({ ...provided, width: fullWidth ? '100%' : width }) }}
                />
            )}
        </div>
    );
}

export default CommonSelect;
