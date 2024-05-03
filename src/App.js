// App.js
import React, { useState } from 'react';
import Filters from './components/Filters';
import JobListings from './components/JobList';


const App = () => {
  const [filters, setFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    remote: false,
    techStack: '',
    role: '',
    minBasePay: ''
  });

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <h1>Job Listings</h1>
      <Filters onFilter={handleFilter} />
      <JobListings filters={filters} />
    </div>
  );
};

export default App;
