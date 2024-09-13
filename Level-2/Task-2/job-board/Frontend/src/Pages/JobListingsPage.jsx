import React, { useEffect, useState } from 'react';
import JobCard from '../Components/Job-card';
import SearchBar from '../Components/Searchbar';
import styled from 'styled-components';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  
  // Fetch all jobs when the component mounts
  useEffect(() => {
    fetchJobs();
  }, []);

  // Fetch jobs with optional search query
  const fetchJobs = (query = '') => {
    fetch(`http://localhost:8080/api/jobs?${query}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Error fetching jobs:', err));
  };

  // Handle search input
  const handleSearch = (query) => {
    const searchParams = new URLSearchParams(query).toString();
    fetchJobs(searchParams);
  };

  return (
    <PageContainer>
      <h2>Land Your Dream Job with JobSearch: Your Path to Success Starts Here!</h2>
      <SearchBar onSearch={handleSearch} />
      <JobList>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </JobList>
    </PageContainer>
  );
};

// Styled Components for layout
const PageContainer = styled.div`
font-family: "Poppins", system-ui;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const JobList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export default JobListingsPage;
