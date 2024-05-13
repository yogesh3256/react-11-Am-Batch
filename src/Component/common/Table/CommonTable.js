import React, { useRef, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CommonTable(prop) {
    const {
         DataResult //to show data in table 

    } = prop;
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // Ref to the table element
    const tableRef = useRef(null);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (DataResult?.length > 0) {
                if (event.key === "ArrowUp" && selectedIndex > 0) {
                    setSelectedIndex((prevIndex) => prevIndex - 1);
                } else if (
                    event.key === "ArrowDown" &&
                    selectedIndex < DataResult.length - 1
                ) {
                    setSelectedIndex((prevIndex) => prevIndex + 1);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedIndex, DataResult]);

    let headers = [];
    if (DataResult?.length > 0) {
        DataResult?.forEach((list) => {
            let temp = Object.keys(list);
            temp.forEach((key) => {
                if (!headers.includes(key)) {
                    headers.push(key);
                }
            });
        });
    }

    return (
        <div>
            {DataResult?.length > 0 ? (
                <TableContainer
                    component={Paper}
                    sx={{ height: 300, border: "1px solid lightgray" }}
                >
                    <Table
                        ref={tableRef}
                        sx={{ minWidth: 650 }}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableHead>
                            <TableRow sx={{ background: "lightgray" }}>
                                {headers.map((header, index) => (
                                    <TableCell key={index}>{header}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {DataResult.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{
                                        backgroundColor:
                                            index === selectedIndex ? "lightblue" : "inherit",
                                    }}
                                >
                                    {headers.map((header, index) => (
                                        <TableCell key={index}>{row[header]}</TableCell>
                                    ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p className="text-center my-28">No Record Found...</p>
            )}
        </div>
    );
}

export default CommonTable;
