import './styles/App.css'
import React, { useState } from 'react';
import PostcodeDropdown from './components/PostcodeDropdown';
import SiccodeDropdown from './components/SiccodeDropdown';
import Results from './components/Results';
import { fetchCompanies } from './api/companiesHouse';

const App = () => {
  const [companies, setCompanies] = useState([]);
  const [selectedPostcode, setSelectedPostcode] = useState('');
  const [selectedSiccode, setSelectedSiccode] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCompanies, setIsCompanies] = useState(false);

  const handleSearch = async () => {
    if (!selectedPostcode) {
      setError('Please select a postcode.');
      return;
    }
    setIsLoading(true);
    setIsCompanies(false);
    try {
      const companies = await fetchCompanies(selectedPostcode, selectedSiccode);
      setCompanies(companies);
      setError(null); // Clear any previous errors
      setIsCompanies(true);
    } catch (error) {
      setError('Error fetching companies. Please try again later.');
      setCompanies([]); // Clear previous results
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='App'>
      <div className='header'>
        <h1>Company Search</h1>
        <p>Designed by Bobby</p>
      </div>

      <div className='form'>
        <PostcodeDropdown selectedPostcode={selectedPostcode} setSelectedPostcode={setSelectedPostcode} />
        <SiccodeDropdown selectedSiccode={selectedSiccode} setSelectedSiccode={setSelectedSiccode}/>

        <button className = 'search' onClick={handleSearch}>Search</button>
      </div>

        {error && <p>{error}</p>}
        {isLoading && <div className="loader">
          <div className="line"></div>
        </div>} 
        
        {isCompanies && <Results companies={companies} />}
    </div>
  );
};

export default App;
