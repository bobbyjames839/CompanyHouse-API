import React from 'react';

const Results = ({ companies }) => {

  const capitalizeWords = (string) => {
    return string.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  return (
    <div className='company-list'>
        <ul>
          {companies.map((company) => (
            <li key={company.company_number}>
              <div className='company-info'>
                <p className='company-name'>{capitalizeWords(company.company_name)}</p>
                <p className='company-address'>{company.registered_office_address.postal_code}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Results;