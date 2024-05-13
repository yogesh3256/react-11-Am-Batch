import React, { useState } from "react";
import CommonButton from "../../common/Button/CommonButton";
import CreateNewItemModal from "./CreateNewItemModal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import { TextField } from "@mui/material";

function ItemMaster() {
  const [tableData, setTableData] = useState([]);
  const [openNewItemModal, setOpenNewItemModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const handleOpen = () => setOpenNewItemModal(true);
  const handleClose = () => setOpenNewItemModal(false);
  console.log("tableData", tableData);

// Define a function to format numbers to two decimal places
const formatToTwoDecimal = (value) => {
  if (typeof value === 'number') {
    return value.toFixed(2);
  }
  return value;
};


  const handleChangeQty = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj.qty = Number(e.target.value);
    tempObj.totalAmt = Number(e.target.value) * Number(row.price);
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };

  const handleChangePrice = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj.price = Number(e.target.value);
    tempObj.totalAmt = Number(e.target.value) * Number(row.qty);
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };

  const handleChangeDiscountPercentage = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj["disc%"] = Number(e.target.value);
    tempObj.discAmt = (Number(e.target.value) * row.qty * row.price) / 100;
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };
  const handleChangeDiscountAmmount = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj.discAmt = Number(e.target.value);
    tempObj["disc%"] = (tempObj.discAmt / (row.qty * row.price)) * 100;
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };
  const handleChangeGstPercentage = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj["gst%"] = Number(e.target.value);
    tempObj.gstAmt = (Number(e.target.value) * row.netAmt) / 100;
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };
  const handleChangeGstAmmount = (e, row, index) => {
    let temp = [...tableData];
    let tempObj = temp[index];

    tempObj.gstAmt = Number(e.target.value);
    tempObj["gst%"] = (tempObj.gstAmt / row.netAmt) * 100;
    tempObj.netAmt = calculateNetAmount(tempObj);

    temp[index] = tempObj;
    setTableData(temp);
  };
  const calculateNetAmount = (item) => {
    let totalAmt = item.qty * item.price;
    let discAmt = (item["disc%"] * totalAmt) / 100;
    let gstAmt = item.gstAmt || 0; // To handle initial value of GST amount

    return totalAmt - discAmt + gstAmt;
  };





  // Calculate total amounts
  const totalAmount = tableData.reduce((total, item) => total + item.totalAmt, 0);
  const totalDiscount = tableData.reduce((total, item) => total + item.discAmt, 0);
  const totalGST = tableData.reduce((total, item) => total + item.gstAmt, 0);
  const totalNetAmount = tableData.reduce((total, item) => total + item.netAmt, 0);

  return (
    <div>
      <div className="text-end m-2">
        <CommonButton
          type="button"
          label="+ Add New"
          className="bg-blue-900 text-white"
          onClick={handleOpen}
        />
      </div>
      <div className="px-2">
        {tableData.length > 0 ? (
          <TableContainer
            component={Paper}
            sx={{ height: 300, border: "1px solid lightgray" }}
            className=""
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow sx={{ background: "lightgray" }}>
                  <TableCell>Actions</TableCell>
                  <TableCell>ItemName</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>TotalAmt</TableCell>
                  <TableCell>Disc%</TableCell>
                  <TableCell>DiscAmt</TableCell>
                  <TableCell>Gst%</TableCell>
                  <TableCell>GstAmt</TableCell>
                  <TableCell>NetAmt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row, index) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedRow(row);
                          setOpenNewItemModal(true);
                        }}
                      >
                        <EditIcon />
                      </button>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row["itemName"]}
                    </TableCell>
                    <TableCell >
                      <input
                         value={formatToTwoDecimal(row["qty"])}
                        name="qty"
                        onChange={(e) => {
                          handleChangeQty(e, row, index)
                        }}
                        className="border rounded w-20 text-center"
                      />

                    </TableCell>
                    <TableCell component="th" scope="row">
                      <div>
                        <input
                          value={formatToTwoDecimal(row["price"])}
                          name="price"
                          onChange={(e) => {
                            handleChangePrice(e, row, index)
                          }}
                          className="border rounded w-20 text-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row?.totalAmt}
                    </TableCell>
                    <TableCell>
                      <div>
                        <input
                          value={formatToTwoDecimal(row["disc%"])}
                          name="disc%"
                          onChange={(e) => {
                            handleChangeDiscountPercentage(e, row, index)
                          }}
                          className="border rounded w-20 text-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <input
                           value={formatToTwoDecimal(row["discAmt"])}
                          name="discAmt"
                          onChange={(e) => {
                            handleChangeDiscountAmmount(e, row, index)
                          }}
                          className="border rounded w-20 text-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <input
                           value={formatToTwoDecimal(row["gst%"])}
                          name="gst%"
                          onChange={(e) => {
                            handleChangeGstPercentage(e, row, index)
                          }}
                          className="border rounded w-20 text-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <input
                            value={formatToTwoDecimal(row["gstAmt"])}
                          name="gstAmt"
                          onChange={(e) => {
                            handleChangeGstAmmount(e, row, index)
                          }}
                          className="border rounded w-20 text-center"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{row.netAmt.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

          </TableContainer>
        )
          :
          (
            <p className="text-center  my-28">No Record Found...</p>
          )}
        {tableData.length > 0 ? (<div className="mt-2 grid grid-cols-4 gap-2 mx-80">
          <TextField
            value={totalAmount.toFixed(2)}
            label='Total Amount'
            size="small"
            InputLabelProps={{
              shrink: totalAmount ? true : false
            }}
          />

          <TextField
            value={totalDiscount.toFixed(2)}
            label='Total Discount '
            size="small"
            InputLabelProps={{
              shrink: totalDiscount ? true : false
            }} />
          <TextField
            size="small"
            value={totalGST.toFixed(2)}
            label='Total Gst Ammount '
            InputLabelProps={{
              shrink: totalGST ? true : false
            }}
          />
          <TextField
            size="small"
            value={totalNetAmount.toFixed(2)}
            label='Total Net Ammount '
            InputLabelProps={{
              shrink: totalNetAmount ? true : false
            }}
          />
        </div>) : ('')}

      </div>

      {openNewItemModal && (
        <CreateNewItemModal
          open={openNewItemModal}
          handleClose={handleClose}
          setTableData={setTableData}
          tableData={tableData}
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      )}
    </div>
  );
}

export default ItemMaster;