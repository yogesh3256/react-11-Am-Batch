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

export default function CreateNewItemModal(props) {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      address: yup.string().required(),
      // age: yup.number().positive().integer().required(),
    })
    .required();

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

  let qtyValue = watch("qty");
  let priceValue = watch("price");
  let discountPercentValue = watch("disc%");
  let gstPercentageValue = watch("gst%");
  let gstAmount = watch('gstAmt');
  console.log("props.selectedRow", props.selectedRow);
  const onSubmit = (data) => {
    if (props.selectedRow === null) {
      let tempArr = [...props.tableData];
      tempArr.push(data);
      props.setTableData(tempArr);
    }
    else {
      const updatedItems = props.tableData.map((item) => {
        if (item === props.selectedRow) {
          return {
            ...item,
            firstName: data.firstName,
            midalName: data.midalName,
            lastName: data.lastName,
            address: data.address,
          };
        }
        return item;
      });
      props.setTableData(updatedItems);
      props.setSelectedRow(null);
    }
    reset();
    props.handleClose();
  };

  React.useEffect(() => {
    if (props.selectedRow !== null) {
      setValue("firstName", props.selectedRow?.firstName);
      setValue("midalName", props.selectedRow?.midalName);
      setValue("lastName", props.selectedRow?.lastName);
      setValue("address", props.selectedRow?.address);
    }
  }, [props.selectedRow]);

  console.log("qtyValue", qtyValue, priceValue);

  React.useEffect(() => {
    let netAmt = 0;
    let gstAmount = 0;
    let gstPercentage = 0;
    if (qtyValue !== undefined && priceValue !== undefined) {
      let totalAmt = Number(qtyValue) * Number(priceValue);
      setValue("totalAmt", totalAmt);
      if (discountPercentValue !== undefined) {
        let discoutedAmt =
          (Number(discountPercentValue) * Number(totalAmt)) / 100;
        setValue("discAmt", discoutedAmt);
        console.log("discoutedAmt", discoutedAmt);
        netAmt = Number(totalAmt) - Number(discoutedAmt);
        setValue("netAmt", netAmt);
        if (gstPercentageValue !== undefined) {
          gstAmount = Number(totalAmt * gstPercentageValue) / 100;
          setValue("gstAmt", gstAmount);
          netAmt = Number(totalAmt) - Number(discoutedAmt) + Number(gstAmount);
          setValue("netAmt", netAmt);
        
        }
      }
    }
  }, [qtyValue, priceValue, discountPercentValue, gstPercentageValue]);
 
  return (
    <div>
    
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
                props.setSelectedRow(null);
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
                  label="Item Name"
                  size="small"
                  name="firstName"
                  {...register("itemName")}
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
                  size="small"
                  {...register("price")}
                  name="price"
                />
              </div>
              <TextField
                defaultValue="0"
                label="Total Amt"
                size="small"
                name="totalAmt"
                {...register("totalAmt")}
                disabled
              />

              <div>
                <TextField
                  label="Disc %"
                  size="small"
                  name="disc%"
                  {...register("disc%")}
                />
              </div>
              <div>
                <TextField
                  defaultValue="0"
                  label="Disc Amt"
                  size="small"
                  name="discAmt"
                  {...register("discAmt")}
                />
              </div>
              <div>
                <TextField
                  label="GST %"
                  size="small"
                  name="gst%"
                  {...register("gst%")}
                />
              </div>
              <div>
                <TextField
                  defaultValue="0"
                  label="GST Amt"
                  size="small"
                  name="gstAmt"
                  {...register("gstAmt")}
                />
              </div>

              <div>
                <TextField
                  defaultValue="0"
                  label="Net AMt"
                  size="small"
                  name="netAmt"
                  {...register("netAmt")}
                  disabled
                />
              </div>
              <Button variant="contained" size="small" type="submit">
                {props.selectedRow === null ? "Add" : "Update"}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}