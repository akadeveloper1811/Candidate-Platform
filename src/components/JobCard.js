// JobCard.js

import React, { useState } from 'react';
import '../styles/styles.css';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <div className="logo-and-details-container">
        <div className="logo-container">
          <img src={job.logoUrl} alt={job.companyName} className="company-logo" />
        </div>
        <div className="company-details">
          <h3>{job.companyName}</h3>
          <h4>{job.jobRole}</h4>
          <h5>{job.location}</h5>
        </div>
      </div>
      <div className="description-container">
        <p><strong>Description:</strong></p>
        <p>{job.jobDetailsFromCompany ? (expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.substring(0, 200)}...`) : ''}</p>
        {!expanded && job.jobDetailsFromCompany && (
          <button onClick={toggleExpand} className="expand-button">
            Read more
          </button>
        )}
        <p><strong>Experience required:</strong> {job.minExp} - {job.maxExp} years</p>
        <button className="apply-button">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
