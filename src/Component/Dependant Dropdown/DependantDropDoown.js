import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Box from '@mui/material/Box';
import CommonSelect from '../common/Select/CommonSelect';
import { useForm } from 'react-hook-form';
import CommonTextField from '../common/TextField/CommonTextField';
import CommonButton from '../common/Button/CommonButton';
import { cityApi, countryApi, districtApi, stateApi, talukaApi } from '../Services/DepenDantDropDown';
import { createFilter } from 'react-select';

function DependantDropDown(props) {
    const defaultValues = {
        country: '',
        state: '',
        district: '',
        taluka: '',
        city: '',
        pincode: ''
    };

    const { handleSubmit, control, watch, reset ,register } = useForm({
        defaultValues: defaultValues
    });

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [district, setDistrict] = useState([]);
    const [taluka, setTaluka] = useState([]);
    const [city, setCity] = useState([]);

    const onSubmit = (data) => {
        console.log("data", data);
        reset(defaultValues);
    };

    let CountryName = watch("country");
    let stateName = watch("state");
    let DistrictName = watch("district");
    let TalukaName = watch("taluka");

    useEffect(() => {
        countryApi()
            .then((res) => {
                setCountry(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        if (CountryName) {
            stateApi(CountryName)
                .then((res) => {
                    setState(res);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setState([]);
            setDistrict([]);
            setTaluka([]);
            setCity([]);
        }
    }, [CountryName]);

    useEffect(() => {
        if (stateName) {
            districtApi(stateName)
                .then((res) => {
                    setDistrict(res);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setDistrict([]);
            setTaluka([]);
            setCity([]);
        }
    }, [stateName]);

    useEffect(() => {
        if (DistrictName) {
            talukaApi(DistrictName)
                .then((res) => {
                    setTaluka(res);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setTaluka([]);
            setCity([]);
        }
    }, [DistrictName]);

    useEffect(() => {
        if (TalukaName) {
            cityApi(TalukaName)
                .then((res) => {
                    setCity(res);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setCity([]);
        }
    }, [TalukaName]);

    return (
        <div>
            <Modal
                open={props.open}
                width={1000}
                onCancel={props.handleClose}
                footer={null}
            >
                <Box>
                    <div className='mt-7'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid grid-cols-3 gap-3'>
                                <div>
                                    <CommonSelect
                                        name='country'
                                        isClearable={true}
                                        control={control}
                                        options={country}
                                        menuPlacement="bottom"
                                        hideSelectedOptions={true}
                                        noOptionsMessage={()=>'No options available'}
                                        filterOption={createFilter({matchFrom:'any'})}
                                        loadingMessage={()=>'Loading...'}
                                        label="Country"
                                         
                                        inputref={{...register("country",{
                                            onChange:(e)=>{
                                                // value
                                            }
                                        })}}
                                        
                                        placeholder='Select the Country'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='state'
                                        isClearable={true}
                                        control={control}
                                        options={state}
                                        label="State"
                                        
                                        placeholder='Select the State'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='district'
                                        isClearable={true}
                                        control={control}
                                        options={district}
                                        label="District"
                                        
                                        placeholder='Select the District'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='taluka'
                                        isClearable={true}
                                        control={control}
                                        options={taluka}
                                        label="Taluka"
                                        
                                        placeholder='Select the Taluka'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='city'
                                        isClearable={true}
                                        control={control}
                                        label="City"
                                        options={city}
                                         
                                        placeholder='Select the City'
                                    />
                                </div>
                                <div>
                                    <CommonTextField
                                        name='pincode'
                                        control={control}
                                        label="Pincode"
                                        size='small'
                                        fullWidth={true}
                                    />
                                </div>
                            </div>
                            <div className='text-end mt-3'>
                                <CommonButton
                                    label="Save"
                                    type='submit'
                                    className='bg-green-500 text-white w-16 font-bold'
                                />
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default DependantDropDown;
