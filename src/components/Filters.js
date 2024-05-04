// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [minExp, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobRole, setRole] = useState('');


  const handleFilter = () => {
    const filters = {
      minExp,
      companyName,
      location,
      jobRole,
    };
    onFilter(filters);
  };

  return (
    <div className="filters">
      <input
        type="text"
        value={minExp}
        placeholder="Min Experience"
        onChange={(e) => setMinExperience(e.target.value)}
      />
      <input
        type="text"
        value={companyName}
        placeholder="Company Name"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        value={location}
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        value={jobRole}
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
