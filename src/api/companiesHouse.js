import axios from 'axios';

const API_KEY = 'd89caaec-0c36-4e81-8ea7-33520d89c932'

export const fetchCompanies = async (postcode, sicCodes) => {

  const url = `/api/advanced-search/companies?location=${postcode}&sic_codes=${sicCodes}&size=4000`;

  try {
    const response = await axios.get(url, {
      auth: {
        username: API_KEY,
        password: '' // No password needed
      }
    });

    const activeCompanies = response.data.items.filter(company => company.company_status === 'active');
    return activeCompanies;
  } catch (error) {
    console.error('Error fetching companies:', error);
    throw error; 
  }
};