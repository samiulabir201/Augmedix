import React from 'react';

const DropdownMenu = ({ options, onChange, selectedOption, heading }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <select onChange={(e) => onChange(e.target.value)} value={selectedOption || ''}>
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
