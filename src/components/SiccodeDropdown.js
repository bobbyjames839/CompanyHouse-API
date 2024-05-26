// src/components/PostcodeDropdown.js
import React from 'react';
import { SicCodes } from '../Lists';

const SiccodeDropdown = ({ selectedSiccode, setSelectedSiccode }) => {
  const handleChange = (event) => {
    setSelectedSiccode(event.target.value);
  };

  return (
    <div className='dropdown siccode'>
      <select className='dropdown-selector siccode-selector' id="siccode" value={selectedSiccode} onChange={handleChange}>
        <option className=' dropdown-text siccode-text' value="">--Select a siccode--</option>
        {SicCodes.map((siccode, index) => (
          <option key={index} value={siccode}>
            {siccode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SiccodeDropdown;
