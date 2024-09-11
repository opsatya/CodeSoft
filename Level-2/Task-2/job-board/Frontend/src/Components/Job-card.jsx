import React from 'react';
import styled from 'styled-components';

// JobCard Component to display job details
const JobCard = ({ job }) => {
  return (
    <Card>
      <LogoContainer>
        <img src={job.logo} alt={`${job.company} logo`} />
      </LogoContainer>
      <JobDetails>
        <CompanyName>{job.company}</CompanyName>
        <Location>{job.location}</Location>
        <Description>{job.description}</Description>
        <WorkType>{job.workType}</WorkType>
      </JobDetails>
    </Card>
  );
};

// Styled-components for the card layout
const Card = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const LogoContainer = styled.div`
  flex: 0 0 80px;
  height: 80px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompanyName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

const Location = styled.p`
  font-size: 14px;
  color: #666;
  margin: 4px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
  margin: 8px 0;
`;

const WorkType = styled.span`
  background-color: #007bff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  align-self: flex-start;
  margin-top: 8px;
`;

export default JobCard;
