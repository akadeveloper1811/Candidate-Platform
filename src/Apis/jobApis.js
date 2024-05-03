// Updated fetchJobs function
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
      const jobs = data.jdList || []; // Extract jdList from response
      const totalCount = data.totalCount || 0; // Extract totalCount from response
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
