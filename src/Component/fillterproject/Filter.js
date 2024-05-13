import React from 'react';

const Filter = ({ filterName, options, selectedOption, onChange }) => {
  return (
    <div>
      <label htmlFor={filterName}>{filterName}:</label>
      <select id={filterName} name={filterName} value={selectedOption} onChange={onChange}>
        <option value="all">All</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;