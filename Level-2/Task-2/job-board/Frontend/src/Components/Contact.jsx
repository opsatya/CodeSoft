import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, log the form data. Replace with actual form submission later.
    console.log('Form Data Submitted:', formData);

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    alert('Your message has been sent successfully!');
  };

  return (
    <ContactContainer>
      <h1>Contact Us</h1>
      <p>Feel free to drop us a message. We will get back to you soon!</p>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </form>
    </ContactContainer>
  );
};

// Styled Components
const ContactContainer = styled.div`
  font-family: "Poppins", system-ui;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  text-align: left;

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    resize: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export default Contact;
