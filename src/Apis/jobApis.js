const API_URL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

const fetchJobs = async (limit, offset) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit,
    offset
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();

    if (response.ok) {
      const jobs = data.jdList.map(job => ({
        id: job.id,
        title: job.title,
        companyName: job.companyName,
        location: job.location,
        remote: job.remote,
        techStack: job.techStack,
        jobRole: job.jobRole,
        jobDetailsFromCompany: job.jobDetailsFromCompany,
        minBasePay: job.minBasePay,
        minExp: job.minExp,
        maxExp: job.maxExp,
        logoUrl: job.logoUrl // Assuming the API provides logoUrl for each job
      }));
      
      const totalCount = data.totalCount || 0;
      return { jobs, totalCount };
    } else {
      throw new Error(data.message || 'Failed to fetch jobs');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetchJobs;
