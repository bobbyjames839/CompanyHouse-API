import React from 'react';
import { londonPostcodes } from '../Lists';

const PostcodeDropdown = ({ selectedPostcode, setSelectedPostcode }) => {
  const handleChange = (event) => {
    setSelectedPostcode(event.target.value);
  };

  return (
    <div className='dropdown postcode'>
      <select className='dropdown-selector postcode-selector' id="postcode" value={selectedPostcode} onChange={handleChange}>
        <option className='dropdown-text postcode-text' value="">--Select a postcode--</option>
        {londonPostcodes.map((postcode, index) => (
          <option key={index} value={postcode}>
            {postcode}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PostcodeDropdown;
