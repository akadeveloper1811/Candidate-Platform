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


  const applyFilters = (jobs, filters) => {
    return jobs.filter(job => {
      // Check if any filter field is filled
      const anyFilterFilled = Object.values(filters).some(value => value !== '');
  
      if (anyFilterFilled) {
        // Apply filtering based on each filter criteria
        const minExperiencePass = filters.minExperience ? job.minExperience >= parseInt(filters.minExperience) : true;
        const companyNamePass = filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true;
        const locationPass = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
        const remotePass = filters.remote ? job.remote === filters.remote : true;
        const techStackPass = filters.techStack ? job.techStack.toLowerCase().includes(filters.techStack.toLowerCase()) : true;
        const rolePass = filters.role ? job.role.toLowerCase().includes(filters.role.toLowerCase()) : true;
        const minBasePayPass = filters.minBasePay ? job.minBasePay >= parseInt(filters.minBasePay) : true;
  
        return minExperiencePass && companyNamePass && locationPass && remotePass && techStackPass && rolePass && minBasePayPass;
      } else {
        // If no filter is filled, return true for all jobs
        return true;
      }
    });
  };
  

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 20>=
      document.documentElement.offsetHeight
    ) {
      setOffset(prevOffset => prevOffset + 10);
    }
  };

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
