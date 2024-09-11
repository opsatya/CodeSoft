import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null); 

  useEffect(() => {
    // Fetch job details by ID (replace with actual API)
    fetch(`/api/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.description}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetailPage;