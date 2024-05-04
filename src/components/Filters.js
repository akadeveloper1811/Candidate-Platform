// src/components/Filters.js
import React, { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilter = () => {
    const filters = {
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay
    };
    onFilter(filters);
  };

  return (
    <div className="filters">
      <input
        type="text"
        value={minExperience}
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
        value={role}
        placeholder="Role"
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        value={minBasePay}
        placeholder="Min Base Pay"
        onChange={(e) => setMinBasePay(e.target.value)}
      />
      <button onClick={handleFilter}>Apply Filters</button>
    </div>
  );
};

export default Filters;
