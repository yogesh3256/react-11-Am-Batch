import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
};

function    Calculator(props) {
    const schema = yup.object({
        ItemName: yup.string().required(),
        qty: yup.number().positive().integer().required(),
        price: yup.number().positive().required(),
        totalammount: yup.number().positive().integer().required(),
        disc: yup.number().positive().required(),
        discAmt: yup.number().positive().required(),
        gst: yup.number().positive().required(),
        gstamt: yup.number().positive().required(),
        netamt: yup.number().positive().required(),
    }).required();

    const {
        reset,
        setValue,
        getValues,
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        let tempArr = [...props.tableData];
        if (props.selectedRow !== null) {
            const index = tempArr.findIndex((row) => row === props.selectedRow);
            if (index !== -1) {
                tempArr[index] = data;
                props.setTableData(tempArr);
            }
            props.setSelectedRow(null);
        } else {
            tempArr.push(data);
            props.setTableData(tempArr);
        }
        props.handleClose();
        reset();
    };
    useEffect(() => {
        if (props.selectedRow !== null) {
            setValue("ItemName", props.selectedRow.ItemName)
            setValue("qty", props.selectedRow.qty)
            setValue("price", props.selectedRow.price)
            setValue("totalammount", props.selectedRow.totalammount)
            setValue("disc", props.selectedRow.disc)
            setValue("discAmt", props.selectedRow.discAmt)
            setValue("gst", props.selectedRow.gst)
            setValue("gstamt", props.selectedRow.gstamt)
            setValue("netamt", props.selectedRow.netamt)

        }
    }, [props.selectedRow])


    let qtyValue = watch('qty');
    let priceValue = watch('price');
    let totalammountValue = watch('totalammount');
    let discPercentageValue = watch('disc');
    let discAmtValue = watch('discAmt');
    let gstPercentageValue = watch('gst');
    let gstAmtValue = watch('gstamt');

    useEffect(() => {
        if (qtyValue && priceValue) {
            const totalammount = qtyValue * priceValue;
            setValue("totalammount", totalammount);
        }
    }, [qtyValue, priceValue]);

    // Calculate discount amount based on discount percentage
    useEffect(() => {
        if (discPercentageValue && totalammountValue) {
            const discAmt = (discPercentageValue / 100) * totalammountValue;
            setValue("discAmt", discAmt);
        }
    }, [discPercentageValue, totalammountValue]);

    // Calculate discount percentage based on discount amount
    useEffect(() => {
        if (discAmtValue && totalammountValue) {
            const discPercentage = (discAmtValue / totalammountValue) * 100;
            setValue("disc", discPercentage);
        }
    }, [discAmtValue, totalammountValue]);

    // Calculate GST amount based on GST percentage
useEffect(() => {
    if (gstPercentageValue && totalammountValue && discAmtValue) {
        const gstAmt = (gstPercentageValue / 100) * (totalammountValue - discAmtValue);
        setValue("gstamt", gstAmt);
    }
}, [gstPercentageValue, totalammountValue, discAmtValue]);

// Calculate GST percentage based on GST amount
useEffect(() => {
    if (gstAmtValue && totalammountValue && discAmtValue) {
        const gstPercentage = (gstAmtValue / (totalammountValue - discAmtValue)) * 100;
        setValue("gst", gstPercentage);
    }
}, [gstAmtValue, totalammountValue, discAmtValue]);
// Calculate net amount based on changes in discount amount and GST amount
useEffect(() => {
    if (discAmtValue !== undefined && gstAmtValue !== undefined) {
        const netAmount = totalammountValue - discAmtValue + gstAmtValue;
        setValue("netamt", netAmount);
    }
}, [discAmtValue, gstAmtValue]);



    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className=''>
                        <div className='flex justify-end'>
                            <button
                                onClick={props.handleClose}
                                type='button' className='text-red-600 border border-red-600 p-1 rounded px-3 text-end '>
                                X
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className="my-20 text-center justify-center flex space-x-3">
                                <div>
                                    <TextField
                                        label="Item_Name"
                                        size="small"
                                        name="ItemName"
                                        {...register("ItemName")}
                                    />
                                </div>
                                <TextField
                                    label="Qty"
                                    size="small"
                                    name="qty"
                                    {...register("qty")}
                                />
                                <div>
                                    <TextField
                                        label="Price"
                                        name="price"
                                        size="small"
                                        {...register("price")}
                                    />
                                </div>
                                <TextField
                                    label="Total Ammt"
                                    disabled
                                    defaultValue={0}
                                    size="small"
                                    name="totalammount"
                                    {...register("totalammount")}
                                />
                                <div>
                                    <TextField
                                        label="disc_%"
                                        size="small"

                                        name="disc"
                                        {...register("disc")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Disc_Ammt"

                                        size="small"
                                        name="discAmt"

                                        {...register("discAmt")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="GST_%"
                                        size="small"
                                        name="gst"
                                        {...register("gst")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="GST_Ammt"

                                        size="small"
                                        name="gstamt"
                                        {...register("gstamt")}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label="Net_Ammt"
                                        size="small"
                                        name="netamt"
                                        {...register("netamt")}
                                    />
                                </div>
                                <Button className="w-16 h-10 px-1.5 py-1" variant="contained" size="small" type="submit">
                                    {props.selectedRow ? 'Update' : 'Save'}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Calculator;
