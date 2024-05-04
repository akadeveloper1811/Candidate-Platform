// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [minExp, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [jobRole, setRole] = useState('');
  const [minJdPay, setMinBasePay] = useState('');

  const handleFilter = () => {
    const filters = {
      minExp,
      companyName,
      location,
      remote,
      techStack,
      jobRole,
      minJdPay
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
      <label>
        Remote:
        <input
          type="checkbox"
          checked={remote}
          onChange={(e) => setRemote(e.target.checked)}
        />
      </label>
      <input
        type="text"
        value={techStack}
        placeholder="Tech Stack"
        onChange={(e) => setTechStack(e.target.value)}
      />
      <input
        type="text"
        value={jobRole}
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        value={minJdPay}
        placeholder="Min Base Pay"
        onChange={(e) => setMinBasePay(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
