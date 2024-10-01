import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled components for the application page
const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const JobApplicationPage = () => {
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container>
      <h2>Apply for Job </h2>
      <Form onSubmit={handleSubmit}>
        <Label>Name:</Label>
        <Input type="text" required />
        
        <Label>Email:</Label>
        <Input type="email" required />

        <Label>Resume:</Label>
        <Input type="file" required />

        <SubmitButton type="submit">Submit Application</SubmitButton>
      </Form>
    </Container>
  );
};

export default JobApplicationPage;
