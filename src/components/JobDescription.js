import React from 'react';

const JobDescription = ({ job, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <p><strong>Company Description:</strong></p>
          <p>{job.jobDetailsFromCompany}</p>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
