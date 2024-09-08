import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  font-family: "Poppins", system-ui;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-image: url('./images/background.png'); /* Add your background image */
  background-size: cover;
  background-position: center;
  height: 500px; /* Adjust height as per your requirement */
  color: white;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items on smaller screens */
    text-align: center;
    padding: 20px;
  }
`;

const Headings = styled.div`
  flex: 1;
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  button {
    background-color: #28a745; /* Match navbar button styling */
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #218838;
    }
  }
`;

const HomeImage = styled.div`
  flex: 1;
  img {
    width: 100%; /* Make the image responsive */
    height: auto;
    max-width: 500px; /* Adjust max width for larger screens */
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Headings>
        <h3>4536+ Jobs listed</h3>
        <h1>Find Your Dream Job</h1>
        <p>We Provide online instant cash loans with quick approval that suits your term length</p>
        <button>Upload Resume</button>
      </Headings>
      <HomeImage>
        <a href="#"><img src="./images/work-image.png" alt="working persons images" /></a>
      </HomeImage>
    </HomeContainer>
  );
};

export default HomePage;
