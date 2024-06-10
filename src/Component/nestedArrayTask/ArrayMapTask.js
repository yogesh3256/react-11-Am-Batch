
import React, { memo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { DummyData } from './DummyArray';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

function ArrayMapTask() {
    const [dummyArrayData, setDummyArrayData] = useState(DummyData.subFunction);
    const [expanded, setExpanded] = useState(Array(DummyData.subFunction.length).fill(false));
    const [accordionWidth, setAccordionWidth] = useState("20%");

    const handleParentChange = (e, index) => {
        e.stopPropagation(); // Prevent the accordion from closing
        let data = [...dummyArrayData];
        data[index].isChecked = e.target.checked;

        if (data[index]?.subFunction) {
            data[index].subFunction = data[index].subFunction?.map(sub => ({
                ...sub,
                isChecked: e.target.checked,
                permissions: sub.permissions?.map(permission => ({
                    ...permission,
                    isChecked: e.target.checked
                }))
            }));
        }

        setDummyArrayData(data);
        setExpanded(expanded.map((exp, i) => i === index || exp)); // Expand the accordion on first click
        setAccordionWidth("100%"); // Expand the accordion width
    };

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpanded(expanded?.map((exp, i) => (i === index ? isExpanded : exp)));
        setAccordionWidth(isExpanded ? "100%" : "20%"); // Adjust width when accordion is expanded or collapsed
    };

    const handleChildChange = (e, parentIndex, childIndex) => {
        let data = [...dummyArrayData];
        data[parentIndex].subFunction[childIndex].isChecked = e.target.checked;

        if (data[parentIndex].subFunction[childIndex]?.permissions) {
            data[parentIndex].subFunction[childIndex].permissions = data[parentIndex].subFunction[childIndex].permissions.map(permission =>
            ({
                ...permission,
                isChecked: e.target.checked
            }));
        }

        // Check if all child checkboxes are unchecked
        const allUnchecked = data[parentIndex].subFunction.every(child => !child.isChecked);
        data[parentIndex].isChecked = !allUnchecked;

        setDummyArrayData(data);
    };

    const handlePermissionChange = (e, parentIndex, childIndex, permissionIndex) => {
        let data = [...dummyArrayData];
        data[parentIndex].subFunction[childIndex].permissions[permissionIndex].isChecked = e.target.checked;

        // Check if all permission checkboxes are unchecked
        const allPermissionsUnchecked = data[parentIndex].subFunction[childIndex].permissions.every(permission => !permission.isChecked);
        data[parentIndex].subFunction[childIndex].isChecked = !allPermissionsUnchecked;

        // Check if all child checkboxes are checked
        const allChildrenChecked = data[parentIndex].subFunction.every(child => child.isChecked);
        data[parentIndex].isChecked = allChildrenChecked;

        // Check if all child checkboxes are unchecked
        const allChildrenUnchecked = data[parentIndex].subFunction.every(child => !child.isChecked);
        data[parentIndex].isChecked = !allChildrenUnchecked;

        setDummyArrayData(data);
    };

    return (
        <>
            {dummyArrayData.length > 0 &&
                dummyArrayData.map((data, parentIndex) => (
                    <div key={parentIndex}>
                        <Accordion
                            expanded={expanded[parentIndex]}
                            onChange={handleAccordionChange(parentIndex)}
                            sx={{
                                backgroundColor: 'white',
                                color: '#333',
                                '&:before': {
                                    display: 'none',
                                },
                                borderRadius: '5px',
                                marginBottom: '5px',
                                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                width: accordionWidth
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                onClick={(e) => e.stopPropagation()} // Prevent accordion from closing on checkbox click
                            >
                                <div className='flex gap-4'>
                                    <input
                                        type='checkbox'
                                        checked={data.isChecked}
                                        onChange={(e) => handleParentChange(e, parentIndex)}
                                    />
                                    <label className='font-bold tracking-wider'>{data.functionality}</label>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: '#fff',
                                }}
                            >
                                {data?.subFunction && data.subFunction.length > 0 &&
                                    data.subFunction.map((subFunctionData, childIndex) => (
                                        <div key={childIndex} className='ml-10 mb-3'>
                                            <Accordion

                                            >
                                                <AccordionSummary
                                                    expandIcon={<ArrowDropDownIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                    sx={{
                                                        backgroundColor: 'white',
                                                        color: '#333',
                                                        '&:before': {
                                                            display: 'none',
                                                        },
                                                        borderRadius: '5px',
                                                        marginBottom: '5px',
                                                        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                                                        overflow: 'hidden',
                                                        width: accordionWidth
                                                    }}
                                                >
                                                    <div className='flex gap-3'>
                                                        <input
                                                            type='checkbox'
                                                            checked={subFunctionData.isChecked}
                                                            onChange={(e) => handleChildChange(e, parentIndex, childIndex)}
                                                        />
                                                        <label className='font-semibold tracking-wide'>{subFunctionData.functionality}</label>
                                                    </div>
                                                </AccordionSummary>
                                                <div className='pl-20'>
                                                    <AccordionDetails>
                                                        {subFunctionData?.permissions && subFunctionData.permissions.length > 0 &&
                                                            <div className='grid grid-cols-3 gap-3'>
                                                                {subFunctionData.permissions.map((permissionData, permissionIndex) => (
                                                                    <div key={permissionIndex} className='grid grid-cols-2'>
                                                                        <div className='flex gap-3'>
                                                                            <input
                                                                                type='checkbox'
                                                                                checked={permissionData.isChecked}
                                                                                onChange={(e) => handlePermissionChange(e, parentIndex, childIndex, permissionIndex)}
                                                                            />
                                                                            <h1 className='mt-2 font-mono'>{permissionData.permission}</h1>
                                                                        </div>
                                                                        <FormControlLabel
                                                                            control={<IOSSwitch sx={{ m: 1 }}
                                                                                checked={permissionData.isAction} />}
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        }
                                                    </AccordionDetails>
                                                </div>
                                            </Accordion>
                                        </div>
                                    ))}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))}
        </>
    );
}
export default memo(ArrayMapTask);
