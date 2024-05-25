import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';
import Box from '@mui/material/Box';
import CommonSelect from '../common/Select/CommonSelect';
import { useForm } from 'react-hook-form';
import CommonTextField from '../common/TextField/CommonTextField';
import CommonButton from '../common/Button/CommonButton';
import { cityApi, countryApi, districtApi, stateApi, talukaApi } from '../Services/DepenDantDropDown';
 

function DependantDropDown(props) {
    const { handleSubmit, control, watch, resetField } = useForm();
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [district, setDistrict] = useState([]);
    const [taluka, setTaluka] = useState([]);
    const [city, setCity] = useState([]);

    const onSubmit = (data) => {
        
        console.log("data", data);
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
                    // Reset the dependent dropdowns
                    resetField("state");
                    resetField("district");
                    resetField("taluka");
                    resetField("city");
                    setDistrict([]);
                    setTaluka([]);
                    setCity([]);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setState([]);
            setDistrict([]);
            setTaluka([]);
            setCity([]);
            resetField("state");
            resetField("district");
            resetField("taluka");
            resetField("city");
        }
    }, [CountryName, resetField]);

    useEffect(() => {
        if (stateName) {
            districtApi(stateName)
                .then((res) => {
                    setDistrict(res);
                    // Reset the dependent dropdowns
                    resetField("district");
                    resetField("taluka");
                    resetField("city");
                    setTaluka([]);
                    setCity([]);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setDistrict([]);
            setTaluka([]);
            setCity([]);
            resetField("district");
            resetField("taluka");
            resetField("city");
        }
    }, [stateName, resetField]);

    useEffect(() => {
        if (DistrictName) {
            talukaApi(DistrictName)
                .then((res) => {
                    setTaluka(res);
                    // Reset the dependent dropdowns
                    resetField("taluka");
                    resetField("city");
                    setCity([]);
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setTaluka([]);
            setCity([]);
            resetField("taluka");
            resetField("city");
        }
    }, [DistrictName, resetField]);

    useEffect(() => {
        if (TalukaName) {
            cityApi(TalukaName)
                .then((res) => {
                    setCity(res);
                    // Reset the dependent dropdown
                    resetField("city");
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            setCity([]);
            resetField("city");
        }
    }, [TalukaName, resetField]);

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
                                        control={control}
                                        options={country}
                                        label="Country"
                                        isClearable={true}
                                        placeholder='Select the Country'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='state'
                                        control={control}
                                        options={state}
                                        label="State"
                                        isClearable={true}
                                        placeholder='Select the State'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='district'
                                        control={control}
                                        options={district}
                                        label="District"
                                        isClearable={true}
                                        placeholder='Select the District'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='taluka'
                                        control={control}
                                        options={taluka}
                                        label="Taluka"
                                        isClearable={true}
                                        placeholder='Select the Taluka'
                                    />
                                </div>
                                <div>
                                    <CommonSelect
                                        name='city'
                                        control={control}
                                        label="City"
                                        options={city}
                                        isClearable={true}
                                        placeholder='Select the City'
                                    />
                                </div>
                                <div>
                                    <CommonTextField
                                        name='pincode'
                                        defaultValue=""
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
                                    className='bg-green-500 text-white w-16  font-bold'
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
