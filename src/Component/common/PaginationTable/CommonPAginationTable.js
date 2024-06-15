import React, { useRef, useState, useEffect, useMemo } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

function CommonPaginationTable(props) {
    const {
        DataResult,
        rowsPerPageOptions = [5, 10, 25],
        defaultRowsPerPage = 5,
        defaultPage = 1,
        paginationColor = "secondary",
        shape, // Default shape is 'circular'
        paginationVariant = "text",
        paginationSize = "medium",
        count,
        showLastButton = false,
        showFirstButton = false,
        selectSize = "medium", // New prop for Select size
        hiddenColumns = [], // New prop to hide specific columns
        className,
        initialRowsPerPage,
        initialPage,
    } = props;

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [page, setPage] = useState(initialPage || defaultPage);
    const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage || defaultRowsPerPage);

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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(1); // Reset to the first page when rows per page change
    };

    const extractTextValues = (obj) => {
        let result = [];
        const traverse = (node) => {
            if (typeof node === 'string') {
                result.push(node);
            } else if (typeof node === 'object' && node !== null) {
                for (let key in node) {
                    if (node.hasOwnProperty(key)) {
                        traverse(node[key]);
                    }
                }
            }
        };
        traverse(obj);
        return result.join(', ');
    };

    // Memoize visibleHeaders
    const memoizedVisibleHeaders = useMemo(() => {
        let headers = [];
        if (DataResult?.length > 0) {
            DataResult?.forEach((list) => {
                let temp = Object.keys(list);
                temp.forEach((key) => {
                    if (!headers.includes(key) && !hiddenColumns.includes(key)) {
                        headers.push(key);
                    }
                });
            });
        }
        return headers;
    }, [DataResult, hiddenColumns]);

    const memoizedPageCount = useMemo(() => {
        const totalItemCount = count ? count : DataResult.length;
        return Math.ceil(totalItemCount / rowsPerPage);
    }, [count, DataResult, rowsPerPage]);

    return (
        <div className={className}>
            {DataResult?.length > 0 ? (
                <>
                    <TableContainer
                        component={Paper}
                        sx={{ border: "1px solid lightgray" }}
                    >
                        <Table
                            ref={tableRef}
                            sx={{ minWidth: 650, borderCollapse: "collapse" }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow sx={{ background: "lightgray" }}>
                                    {memoizedVisibleHeaders.map((header, index) => (
                                        <TableCell key={index} sx={{ border: "1px solid black", textAlign:"center",font:'bold' }}>{header}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {DataResult.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, rowIndex) => (
                                    <TableRow
                                        key={rowIndex}
                                        sx={{
                                            backgroundColor:
                                                rowIndex + (page - 1) * rowsPerPage === selectedIndex ? "lightblue" : "inherit",
                                            '&:hover': {
                                                backgroundColor: 'lightyellow', // Example hover effect
                                            },
                                            border: "1px solid lightgray"
                                        }}
                                    >
                                        {memoizedVisibleHeaders.map((header, cellIndex) => (
                                            <TableCell key={cellIndex} sx={{ border: "1px solid lightgray",textAlign:"center"}}>
                                                {typeof row[header] === 'object' ? extractTextValues(row[header]) : row[header]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack direction="row" spacing={2} sx={{ marginTop: 2, alignItems: "center", justifyContent: "center" }}>
                        <Pagination
                            count={memoizedPageCount}
                            page={page}
                            onChange={handleChangePage}
                            color={paginationColor}
                            shape={shape} // Dynamic shape based on props
                            variant={paginationVariant}
                            size={paginationSize}
                            showFirstButton={showFirstButton}
                            showLastButton={showLastButton}
                        />
                        <FormControl sx={{ minWidth: 120 }}>
                            <InputLabel>Rows per page</InputLabel>
                            <Select
                                value={rowsPerPage}
                                onChange={handleChangeRowsPerPage}
                                label="Rows per page"
                                size={selectSize} // Set size dynamically
                            >
                                {rowsPerPageOptions.map((option) =>
                                    typeof option === 'object' ? (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ) : (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                    </Stack>
                </>
            ) : (
                <p className="text-center my-28">No Record Found...</p>
            )}
        </div>
    );
}

export default CommonPaginationTable;
