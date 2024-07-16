import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CommonButton from '../../common/Button/CommonButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function PracticeTask() {
    const inputFields = [
        {
            id: 1,
            name: 'userName',
            label: 'Username',
            type: 'text',
        },
        {
            id: 2,
            name: 'password',
            label: 'Password',
            type: 'password',
        },
        {
            id: 3,
            name: 'age',
            label: 'Age',
            type: 'number',
        },
        {
            id: 4,
            name: 'phoneNo',
            label: 'PhoneNo',
            type: 'text',
        }
    ];

    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        age: '',
        phoneNo: ''
    });
    const [data, setData] = useState([])
    console.log("data", data);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmitInputForm = (e) => {
        e.preventDefault();
        const { userName, password, age } = formData;
        if (userName === "" || password === "" || age === "") {
            alert("Please fill all the fields");
        } else {
            alert("Form submitted successfully...");
            console.log(formData);
            setData([...data, formData])
            setFormData({
                userName: '',
                password: '',
                age: ''
            })
        }
    };

    const handleisPassWordShow = () => {
        setIsShowPassword(!isShowPassword);
    };

    return (
        <div className="flex justify-center h-screen">
            <form className="flex flex-col mt-7 gap-4 border p-3" onSubmit={handleSubmitInputForm}>
                {inputFields.map((inputField) => (
                    <div key={inputField.id} style={{ width: '100%' }}>
                        <TextField
                            fullWidth
                            label={inputField.label}
                            name={inputField.name}
                            type={inputField.id === 2 ? (isShowPassword ? 'text' : 'password') : inputField.type}
                            value={formData[inputField.id]}
                            onChange={handleInputChange}
                            size="small"
                            InputProps={inputField.id === 2 ? ({
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {isShowPassword ? (
                                            <VisibilityIcon onClick={handleisPassWordShow} />
                                        ) : (
                                            <VisibilityOffIcon onClick={handleisPassWordShow} />
                                        )}
                                    </InputAdornment>
                                ),
                            }) : {}}
                        />
                    </div>
                ))}
                <CommonButton
                    label="Submit"
                    type="submit"
                    className="bg-green-500 text-white w-28 rounded ml-14"
                />
            </form>
        </div>
    );
}

export default PracticeTask;
