import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import fetchJobs from '../Apis/jobApis';
import '../styles/styles.css';

const JobList = ({ filters }) => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetchJobs(10, offset)
      .then(({ jobs: newJobs }) => {
        // Filter both existing jobs and newly fetched jobs
        const allJobs = applyFilters([...jobs, ...newJobs], filters);
        setJobs(allJobs);
      })
      .catch(error => console.error(error));
  }, [offset, filters, jobs]); // Include 'jobs' in the dependency array

  const applyFilters = (jobs, filters) => {
    return jobs.filter(job => {
      // Apply filtering based on each filter criteria
      const minExperiencePass = filters.minExp ? job.minExp >= parseInt(filters.minExp) : true;
      const companyNamePass = filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true;
      const locationPass = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
      const remotePass = filters.remote ? job.remote === filters.remote : true;
      const techStackPass = filters.techStack ? job.techStack.toLowerCase().includes(filters.techStack.toLowerCase()) : true;
      const rolePass = filters.jobRole ? job.jobRole.toLowerCase().includes(filters.jobRole.toLowerCase()) : true;
      const minBasePayPass = filters.minJdPay ? job.minJdPay >= parseInt(filters.minJdPay) : true;

      return minExperiencePass && companyNamePass && locationPass && remotePass && techStackPass && rolePass && minBasePayPass;
    });
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 20 >=
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
