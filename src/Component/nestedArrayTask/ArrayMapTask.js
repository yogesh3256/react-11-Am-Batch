import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DummyData } from './DummyArray';

function ArrayMapTask() {
    const [dummyArrayData, setDummyArrayData] = useState(DummyData.subFunction);

    React.useEffect(() => {
        console.log("modified dataArray is :", dummyArrayData);
    }, [dummyArrayData]);

    const handleParentChange = (e, index) => {
        let data = [...dummyArrayData];
        data[index].isChecked = e.target.checked;

        if (data[index]?.subFunction && data[index].subFunction.length > 0) {
            // Check/uncheck all child checkboxes
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

    return (
        <>
            {dummyArrayData.length > 0 &&
                dummyArrayData.map((data, parentIndex) => (
                    <div key={parentIndex}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <div className='flex gap-4'>
                                    <input
                                        type='checkbox'
                                        checked={data.isChecked}
                                        onChange={(e) => handleParentChange(e, parentIndex)}
                                    />
                                    <label className='font-semibold'>{data.functionality}</label>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='grid grid-cols-5 gap-4'>
                                    {data.subFunction && data.subFunction.length > 0 &&
                                        data.subFunction.map((subFunctionData, childIndex) => (
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
