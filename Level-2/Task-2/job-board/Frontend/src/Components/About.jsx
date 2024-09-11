import React from 'react';
import styled from 'styled-components';

// Styled Components
const AboutContainer = styled.section`
  font-family: "Poppins", system-ui;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AboutText = styled.div`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  padding: 0 1.5rem;
  flex: 1;

  @media (min-width: 768px) {
    max-width: 50%;
  }
`;

const Highlight = styled.span`
  color: #007bff;
  font-weight: bold;
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 450px;
  margin-top: 2rem;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 2rem;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutContent>
        <AboutText>
          Welcome to <Highlight>JobBoardX</Highlight>, your one-stop platform for connecting
          <Highlight> talented job seekers</Highlight> with the <Highlight> best employers</Highlight> in the industry. 
          Our mission is to simplify the job search process and help you find the perfect opportunity to match your skills and aspirations.
          <br /><br />
          Whether you're looking for <Highlight> full-time</Highlight>, <Highlight> part-time</Highlight>, or <Highlight> freelance</Highlight> work, we've got you covered. With a user-friendly interface and a vast network of companies, we strive to provide the best experience for both candidates and recruiters.
        </AboutText>
        <AboutImage src="./images/job-board.jpg" alt="Job Board About Us" />
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
