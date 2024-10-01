import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Company = styled.p`
  font-size: 1.25rem;
  color: #777;
`;

const Location = styled.p`
  font-size: 1.1rem;
  color: #999;
`;

const Description = styled.p`
  margin: 20px 0;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #444;
`;

const ApplyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch job details by ID
    fetch(`http://localhost:8080/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  const handleApplyClick = () => {
    navigate(`/apply/${id}`);
  };

  if (!job) return <p>Loading...</p>;

  return (
    <Container>
      <Title>{job.title}</Title>
      <Company>{job.company}</Company>
      <Location>{job.location}</Location>
      <Description>{job.description}</Description>
      <ApplyButton onClick={handleApplyClick}>Apply Now</ApplyButton>
    </Container>
  );
};

export default JobDetailPage;
