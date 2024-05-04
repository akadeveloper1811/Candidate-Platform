// JobList.js
import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import fetchJobs from '../Apis/jobApis';
import '../styles/styles.css';
import './Filters'

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchJobs(20, offset)
      .then(({ jobs: newJobs }) => {
        const filteredJobs = applyFilters(newJobs, filters);
        setJobs(prevJobs => [...prevJobs, ...filteredJobs]);
      })
      .catch(error => console.error(error));
  }, [offset, filters]);

  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default JobList;
