import React, { useState } from 'react';
import '../styles/styles.css';
import JobDescription from './JobDescription'; // Import the modal component

const JobCard = ({ job }) => {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
        <p>{job.jobDetailsFromCompany ? `${job.jobDetailsFromCompany.substring(0, 200)}...` : ''}</p>
        {job.jobDetailsFromCompany && (
          <button onClick={openModal} className="expand-button">
            Read more 
          </button>
        )}
        <p><strong>Experience required:</strong> {job.minExp ? `${job.minExp} - ${job.maxExp} years` : 'Freshers'}</p>
        <button className="apply-button">Apply</button>
      </div>
      <JobDescription job={job} isOpen={modalOpen} onClose={closeModal} /> {/* Render the modal component */}
    </div>
  );
};

export default JobCard;
