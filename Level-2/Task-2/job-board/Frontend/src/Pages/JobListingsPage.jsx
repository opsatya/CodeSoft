import React, { useEffect, useState } from 'react';
import JobCard from '../Components/Job-card';
import SearchBar from '../Components/Searchbar';
import styled from 'styled-components';

const JOBS_PER_PAGE = 9; // Number of jobs to display per page

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  
  // Fetch jobs when the component mounts or the current page changes
  useEffect(() => {
    fetchJobs();
  }, [currentPage]);

  // Fetch jobs with optional search query and pagination
  const fetchJobs = (query = '') => {
    fetch(`http://localhost:8080/api/jobs?${query}&page=${currentPage}&limit=${JOBS_PER_PAGE}`)
      .then((res) => res.json())
      .then((data) => {
        // Check if jobs exist and are in the expected format
        if (Array.isArray(data.jobs)) {
          setJobs(data.jobs);
          setTotalJobs(data.total || 0);
        } else {
          console.error('Invalid data format:', data);
          setJobs([]);
          setTotalJobs(0);
        }
      })
      .catch((err) => {
        console.error('Error fetching jobs:', err);
        setJobs([]);
        setTotalJobs(0);
      });
  };

  // Handle search input
  const handleSearch = (query) => {
    setCurrentPage(1); // Reset to the first page on new search
    const searchParams = new URLSearchParams(query).toString();
    fetchJobs(searchParams);
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const totalPages = Math.ceil(totalJobs / JOBS_PER_PAGE);

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
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </Pagination>
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

const Pagination = styled.div`
  margin-top: 20px;
`;

const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  background-color: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: #fff;
  }
`;

export default JobListingsPage;
