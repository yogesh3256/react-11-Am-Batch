import { InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CommonButton from '../../common/Button/CommonButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function PracticeTask() {
    const inputFields = [
        {
            id: 1,
            label: 'Username',
            type: 'text',
        },
        {
            id: 2,
            label: 'Password',
            type: 'password',
        }
    ];

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmitInputForm = (e) => {
        e.preventDefault();
        if (userName === "" || password === "") {
            alert("Please fill all the fields");
        } else {
            alert("form Submitted SucessFully...");
            console.log(userName,password);
        }
    }
    const handleisPassWordShow = () => {
        setIsShowPassword(!isShowPassword)
    }

    return (
        <div className="flex justify-center h-screen">
            <form className="flex flex-col mt-7 gap-4" onSubmit={handleSubmitInputForm}>
                {inputFields.map((inputField, index) => (
                    <div key={inputField.id}>
                        <TextField
                            label={inputField.label}
                            type={isShowPassword ? 'text' : inputField.type}
                            value={index === 0 ? userName : password}
                            onChange={index === 0 ? handleUserNameChange : handlePasswordChange}
                            size="small"
                            InputProps={index === 1 && ({
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {
                                            isShowPassword ? <VisibilityIcon onClick={handleisPassWordShow} />:<VisibilityOffIcon onClick={handleisPassWordShow} />
                                        }


                                    </InputAdornment>
                                ),
                            })}
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
