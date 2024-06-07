import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './DummyArray';

function ArrayMapTask() {
    const [dummyArrayData, setDummyArrayData] = useState(DummyData.subFunction);
    const [expanded, setExpanded] = useState(Array(DummyData.subFunction.length).fill(false));

    useEffect(() => {
        console.log("modified dataArray is :", dummyArrayData);
    }, [dummyArrayData]);

    const handleParentChange = (e, index) => {
        e.stopPropagation(); // Prevent the accordion from closing
        let data = [...dummyArrayData];
        data[index].isChecked = e.target.checked;

        if (data[index]?.subFunction && data[index].subFunction.length > 0) {
            // Check or uncheck all child checkboxes
            for (let functionObject of data[index].subFunction) {
                functionObject.isChecked = e.target.checked;
            }
        }

        // Check if all child checkboxes are checked
        const allChecked = data[index].subFunction.every(child => child.isChecked);
        if (allChecked) {
            data[index].isChecked = true;
        }

        setDummyArrayData(data);
        setExpanded(expanded.map((exp, i) => i === index || exp)); // Expand the accordion on first click
    };

    const handleChildChange = (e, parentIndex, childIndex) => {
        let data = [...dummyArrayData];
        data[parentIndex].subFunction[childIndex].isChecked = e.target.checked;

        // Check if all child checkboxes are checked
        const allChecked = data[parentIndex].subFunction.every(child => child.isChecked);
        if (allChecked) {
            data[parentIndex].isChecked = true;
        } else {
            data[parentIndex].isChecked = false;
        }

        setDummyArrayData(data);
    };

    const handleAccordionChange = (index) => (event, isExpanded) => {
        setExpanded(expanded.map((exp, i) => (i === index ? isExpanded : exp)));
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
                                backgroundColor: '##C0C0C01', 
                                color: '#333', 
                                '&:before': {
                                    display: 'none',
                                },
                                borderRadius: '5px',  
                                marginBottom: '5px',  
                                boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',  
                                overflow: 'hidden',  
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                sx={{
                                    backgroundColor: '#d3d3d3',  
                                    '&.Mui-expanded': {
                                        minHeight: '50px',
                                    },
                                }}
                            >
                                <div className='flex gap-4'>
                                    <input
                                        type='checkbox'
                                        checked={data.isChecked}
                                        onClick={(e) => e.stopPropagation()} // Prevent accordion from closing on checkbox click
                                        onChange={(e) => handleParentChange(e, parentIndex)}
                                    />
                                    <label className='font-semibold tracking-wider'>{data.functionality}</label>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: '#fff',  
                                }}
                            >
                                <div className='grid grid-cols-5 gap-4'>
                                    {data?.["subFunction"] && data.subFunction.length > 0 &&
                                        data?.["subFunction"].map((subFunctionData, childIndex) => (
                                            <div key={childIndex} className='flex gap-3'>
                                                <input
                                                    type='checkbox'
                                                    checked={subFunctionData.isChecked}
                                                    onChange={(e) => handleChildChange(e, parentIndex, childIndex)}
                                                />
                                                <label>{subFunctionData.functionality}</label>
                                            </div>
                                        ))}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))}
        </>
    );
}

export default ArrayMapTask;
