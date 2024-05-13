
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function UseStateForm() {
  const schema = yup
    .object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      address: yup.string().required(),
      // age: yup.number().positive().integer().required(),
    })
    .required();

  const {
    reset,      //reset the textfeild values after submit
    setValue,    //set a value to the fields

    getValues,   //get a value from the fields

    watch,   //get the values of onchange not using onchange
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [tableData, setTableData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  // const handleAddData = () => {
  //   let tempArr = [...tableData];
  //   if (firstName !== "" && lasttName !== "" && address !== "") {
  //     let tempObj = {
  //       "First Name": firstName,
  //       "Middle Name": middleName,
  //       "Last Name": lasttName,
  //       Address: address,
  //     };
  //     tempArr.push(tempObj);
  //     setTableData(tempArr);
  //     setFirstName("");
  //     setMiddleName("")
  //     setLastName("")
  //     setAddress("")
  //     setIsRequired(false);
  //   } else {
  //     setIsRequired(true);
  //   }
  // };

  // const handleAddData= ()=>{
  //   let tempArr = [...tableData];

  //   let firstNameValue =getValues("firstName")

  // console.log("firstName",firstNameValue);
  //   // tempArr.push()
  //   // setTableData(tempArr)
  //   // reset()

  // }

  console.log("formData", selectedRow);
  const onSubmit = (data) => {
    let tempArr = [...tableData];
    tempArr.push(data);
    setTableData(tempArr);
    reset();
  };


  useEffect(() => {
    if (selectedRow !== null) {
      setValue("firstName", selectedRow.firstName,)
    }
  }, [selectedRow])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-20 text-center justify-center flex space-x-2">
          <div>
            <TextField
              error={errors.firstName}
              label="First Name"
              size="small"
              name="firstName"
              {...register("firstName")}
            />
          </div>
          <TextField
            label="Midal Name"
            size="small"
            name="midalName"
            {...register("midalName")}
          />
          <div>
            <TextField
              label="Last Name"
              error={errors.lastName}
              size="small"
              {...register("lastName")}
              name="lastName"
            />
          </div>
          <div>
            <TextField
              error={errors.address}
              label="Address"
              size="small"
              name="address"
              {...register("address")}
            />
          </div>
          <Button variant="contained" size="small" type="submit">
            Add
          </Button>
        </div>
      </form>
      {tableData.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow sx={{ background: "lightgray" }}>
                <TableCell>First Name</TableCell>
                <TableCell>Middle Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    setSelectedRow(row)
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["midalName"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row["lastName"]}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )
        : (
          <p className="text-center  my-28">No Record Found...</p>
        )}
    </>
  );
}

export default UseStateForm;
