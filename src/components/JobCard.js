import React, { useState } from 'react';
import '../styles/styles.css';

const JobCard = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="job-card">
      <h3>{job.jobRole}</h3>
      <p>Company: {job.compnay}</p>
      <p>Location: {job.location}</p>

      <p>
        Description: {job.jobDetailsFromCompany ? (expanded ? job.jobDetailsFromCompany : `${job.jobDetailsFromCompany.substring(0, 200)}...`) : ''}
        {!expanded && job.jobDetailsFromCompany && (
          <button onClick={toggleExpand} className="expand-button">
            Read more
          </button>
        )}
      </p>
      <p>Experience required: {job.minExp} - {job.maxExp} years</p>
      <button className="apply-button">Apply</button>
    </div>
  );
};

export default JobCard;
