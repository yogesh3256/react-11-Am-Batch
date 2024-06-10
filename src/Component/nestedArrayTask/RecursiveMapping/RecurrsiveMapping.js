import React, { memo, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { DummyData } from '../DummyArray';
 

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

const RecursiveAccordion = ({ data, level = 0, parentIndex = null, childIndex = null, handleParentChange, handleChildChange, handlePermissionChange, handleAccordionChange, expanded }) => {
    const [accordionWidth, setAccordionWidth] = useState('20%');

    const handleAccordionWidth = (isExpanded) => {
        setAccordionWidth(isExpanded ? '100%' : '20%');
    };

    return (
        <div style={{ marginLeft: level * 20 }}>
            {data.map((item, index) => {
                const currentIndex = parentIndex !== null ? `${parentIndex}-${index}` : index;
                return (
                    <Accordion
                        key={currentIndex}
                        expanded={expanded[currentIndex]}
                        onChange={(event, isExpanded) => {
                            handleAccordionWidth(isExpanded);
                            handleAccordionChange(currentIndex)(event, isExpanded);
                        }}
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
                            width: accordionWidth, // Dynamically change width
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${currentIndex}-content`}
                            id={`panel${currentIndex}-header`}
                            onClick={(e) => e.stopPropagation()} // Prevent accordion from closing on checkbox click
                        >
                            <div className='flex gap-4'>
                                <input
                                    type='checkbox'
                                    checked={item.isChecked}
                                    onChange={(e) => level === 0 ? handleParentChange(e, index) : handleChildChange(e, parentIndex, index)}
                                />
                                <label className='font-bold tracking-wider'>{item.functionality}</label>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails sx={{ backgroundColor: '#fff' }}>
                            {item.subFunction && item.subFunction.length > 0 && (
                                <RecursiveAccordion
                                    data={item.subFunction}
                                    level={level + 1}
                                    parentIndex={level === 0 ? index : parentIndex}
                                    childIndex={level === 0 ? null : index}
                                    handleParentChange={handleParentChange}
                                    handleChildChange={handleChildChange}
                                    handlePermissionChange={handlePermissionChange}
                                    handleAccordionChange={handleAccordionChange}
                                    expanded={expanded}
                                />
                            )}
                            {item.permissions && item.permissions.length > 0 && (
                                <div className='grid grid-cols-3 gap-3'>
                                    {item.permissions.map((permission, permissionIndex) => (
                                        <div key={permissionIndex} className='grid grid-cols-2'>
                                            <div className='flex gap-3'>
                                                <input
                                                    type='checkbox'
                                                    checked={permission.isChecked}
                                                    onChange={(e) => handlePermissionChange(e, parentIndex, childIndex, permissionIndex)}
                                                />
                                                <h1 className='mt-2 font-mono'>{permission.permission}</h1>
                                            </div>
                                            <FormControlLabel
                                                control={<IOSSwitch sx={{ m: 1 }} checked={permission.isAction} />}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </div>
    );
};


function RecurrsiveMapping() {
    const [dummyArrayData, setDummyArrayData] = useState(DummyData?.subFunction);
    const [expanded, setExpanded] = useState({});

    const handleParentChange = (e, index) => {
        e.stopPropagation(); // Prevent the accordion from closing
        let data = [...dummyArrayData];
        data[index].isChecked = e.target.checked;

        if (data[index]?.subFunction) {
            data[index].subFunction = data[index].subFunction.map(sub => ({
                ...sub,
                isChecked: e.target.checked,
                permissions: sub.permissions?.map(permission => ({
                    ...permission,
                    isChecked: e.target.checked
                }))
            }));
        }

        setDummyArrayData(data);
        setExpanded({ ...expanded, [index]: true }); // Expand the accordion on first click
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

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpanded({ ...expanded, [index]: isExpanded });
    };

    return (
        <>
            <RecursiveAccordion
                data={dummyArrayData}
                handleParentChange={handleParentChange}
                handleChildChange={handleChildChange}
                handlePermissionChange={handlePermissionChange}
                handleAccordionChange={handleAccordionChange}
                expanded={expanded}
            />
        </>
    );
}

export default memo(RecurrsiveMapping);
