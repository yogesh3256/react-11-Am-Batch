import * as React from 'react';
import { styled } from '@mui/system';
import TablePagination, { tablePaginationClasses as classes } from '@mui/material/TablePagination';

export default function CommonPaginationTable({
  data,
  rowsPerPageOptions = [5, 10, 25, { label: 'All', value: -1 }],
  colSpan = 3,
  count,
  rowsPerPage: initialRowsPerPage = 5,
  page: initialPage = 0,
  onPageChange,
  onRowsPerPageChange,
  className // Added prop for custom styling
}) {
  const [page, setPage] = React.useState(initialPage);
  const [rowsPerPage, setRowsPerPage] = React.useState(initialRowsPerPage);

  // Extract headers from the first object in data (assuming all objects have the same structure)
  const headers = React.useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).filter((header) => !['id', 'status'].includes(header));
       
    }
    return [];
  }, [data]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    onPageChange && onPageChange(event, newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    onRowsPerPageChange && onRowsPerPageChange(event, newRowsPerPage);
  };

  const renderCellContent = (content, header) => {
    if (typeof content === 'object' && content !== null) {
      if (Array.isArray(content)) {
        return content.map(item => renderCellContent(item)).join(', ');
      }
      // Special handling for 'country' and 'state' fields
      if (header === 'country') {
        return content?.country_name; // Assuming 'name' is the field containing the readable name
      }
      if (header === 'state') {
        return content?.state_name; // Assuming 'name' is the field containing the readable name
      }
      // Filter out 'id' and 'status' fields, and any nested objects
      return Object.entries(content)
        .filter(([key, value]) => !['id', 'status'].includes(key) && typeof value !== 'object')
        .map(([key, value]) => value)
        .join(', ');
    }
    return content;
  };

  return (
    <>
      {
        data?.length > 0 ? (
          <div className={className} style={{ overflowX: 'auto', overflowY: 'auto' }}>
            <Root sx={{ maxWidth: '100%', width: 500 }}>
              <table aria-label="custom pagination table">
                <thead>
                  <tr>
                    {headers.map((header, index) => (
                      <th className='text-center' key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(rowsPerPage > 0
                    ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : data
                  ).map((row, index) => (
                    <tr key={index}>
                      {headers.map((header, index) => (
                        <td key={`${index}-${header}`}>
                          {renderCellContent(row[header], header)}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {emptyRows > 0 && (
                    <tr style={{ height: 41 * emptyRows }}>
                      <td colSpan={headers.length} aria-hidden />
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <CustomTablePagination
                      rowsPerPageOptions={rowsPerPageOptions}
                      colSpan={colSpan}
                      count={count || data.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                  </tr>
                </tfoot>
              </table>
            </Root>
          </div>
        ) : (
          <h1 className='text-2xl font-bold text-center my-20'>No Records Found...</h1>
        )
      }
    </>
  );
}

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  }
  `,
);

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

 
