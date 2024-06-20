import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import CommonButton from '../../common/Button/CommonButton';
import { yupResolver } from '@hookform/resolvers/yup';

function PracticeUseFieldArray() {
    const defaultValues = {
        items: [{
            firstName: '',
            lastName: '',
            age: ''
        }]
    };
    const [formData, setFormData] = useState([]);
    const validationSchema = yup.object().shape({
        items: yup.array().of(
            yup.object().shape({
                firstName: yup.string().required(),
                lastName: yup.string().required(),
                age: yup.number().required().positive().integer(),
            })
        )
    });

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(validationSchema)
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items'
    });

    const onSubmit = (data) => {
        let temparr = [...formData, ...data.items]; // Flatten and merge arrays
        setFormData(temparr);
        console.log(data);
        reset();
    };

    return (
        <>
            <div className="flex justify-center">
                <form className='flex flex-col items-center mt-5 space-y-3' onSubmit={handleSubmit(onSubmit)}>
                    {fields.map((field, index) => (
                        <div key={field.id} className='flex space-x-2'>
                            <Controller
                                name={`items[${index}].firstName`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors?.items?.[index]?.firstName}
                                        label='First Name'
                                        size='small'
                                    />
                                )}
                            />
                            <Controller
                                name={`items[${index}].lastName`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors?.items?.[index]?.lastName}
                                        label='Last Name'
                                        size='small'
                                    />
                                )}
                            />
                            <Controller
                                name={`items[${index}].age`}
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        error={!!errors?.items?.[index]?.age}
                                        label='Age'
                                        type='number'
                                        size='small'
                                    />
                                )}
                            />
                            {index !== 0 &&
                                <CommonButton
                                    label='Remove'
                                    type='button'
                                    className='bg-red-500 text-white whitespace-nowrap px-1.5 rounded'
                                    onClick={() => remove(index)}
                                />
                            }
                        </div>
                    ))}

                    <div className='flex space-x-3 mt-5'>
                        <CommonButton
                            label='ADD'
                            type='button'
                            className='bg-green-500 text-white whitespace-nowrap px-2 rounded'
                            onClick={() => append({ firstName: '', lastName: '', age: '' })}
                        />
                        <CommonButton
                            label='Submit'
                            type='submit'
                            className='bg-blue-500 text-white whitespace-nowrap px-2 rounded'
                        />
                    </div>
                </form>
            </div>
            <div className='Table mt-10'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Age</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {formData.flat().map((row, index) => ( // Flatten the formData array
                                <TableRow key={index}>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell>{row.lastName}</TableCell>
                                    <TableCell>{row.age}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}

export default PracticeUseFieldArray;
