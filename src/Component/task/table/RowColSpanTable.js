import React from 'react';

const RowColSpanTable = () => {
  return (
    <div className="p-6 flex justify-center">
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2"> date Time</th>
            <th className="border border-gray-300 px-4 py-2">start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2"> Name of<br/>medicine </th>
            <th className="border border-gray-300 px-4 py-2">Dose</th>
            <th className="border border-gray-300 px-4 py-2">Route</th>
            <th className="border border-gray-300 px-4 py-2"colSpan='8'>27/03/2024</th>
          
          </tr>
        </thead>
        <tbody>
          <tr>
          <th className="border border-gray-300 px-4 py-2" colSpan="6"></th>
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th>
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th>
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th>
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th> 
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th> 
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th> 
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th> 
          <th className="border border-gray-300 px-4 py-2" >01.30AM</th> 
          </tr>
          <tr>
           
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default RowColSpanTable;
