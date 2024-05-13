import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField } from "@mui/material";
 
 


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
};
function LoginModal(props) {


    const {
        reset,
        setValue,
        getValues,
        watch,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        // resolver: yupResolver(schema),
    });


    const onSubmit = (data) => {
        let temparr = [...props.tableData]
        temparr.push(data);
        props.setTableData(temparr);
        props.handleClose();
        reset();
    }
    return (
        <>
            <Modal
                open={props.open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            className="text-red-600 border border-red-600 p-1 rounded px-3 text-end "
                            onClick={() => {
                                props.handleClose();
                                reset();
                            }}
                        >
                            X
                        </button>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="my-2 text-center grid grid-cols-4 gap-2">
                            <div>
                                <TextField
                                    label="FirstName"
                                    size="small"
                                    name="FirstName"
                                    {...register("FirstName")}
                                />
                            </div>
                            <TextField
                                label="LastName"
                                size="small"
                                name="LastName"
                                {...register("LastName")}
                            />

                            <div>
                                <TextField
                                    label="Address"

                                    size="small"
                                    {...register("Address")}
                                    name="Address"
                                />


                            </div>
                            <div>
                                <TextField
                                    label="Pincode"

                                    size="small"
                                    {...register("Pincode")}
                                    name="Pincode"
                                />


                            </div>
                            <div>
                                <TextField
                                    label="subject"
                                    size="small"
                                    {...register("Subject")}
                                    name="Subject"
                                />


                            </div>
                            

                        </div>
                        <div className="text-end mt-4">
                            <Button variant="contained" size="small" type="submit">
                                {/* {props.selectedRow === null ? "Add" : "Update"} */} Add
                            </Button>
                        </div>
                    </form>
                </Box>
            </Modal>

        </>
    )
}

export default LoginModal