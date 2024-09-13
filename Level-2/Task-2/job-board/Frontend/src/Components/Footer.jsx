import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons from react-icons


 const FooterContainer = styled.footer`
 font-family: "Poppins", system-ui;
  padding: 50px 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Four columns */
  gap: 20px;
  color: #333; /* Updated text color */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
    text-align: center;
  }
`;

const LogoSection = styled.div`
  img {
    width: 150px; /* Logo size */
    margin-bottom: 20px;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;

    a {
      color: #333; /* Updated icon color */
      font-size: 24px;
      transition: color 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        color: #007bff; /* Change color on hover */
      }
    }
    @media (max-width: 768px) {
        padding-left: 85px;
  }
  }
`;

const NavColumn = styled.div`
  h4 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #007bff; /* Heading color */
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      
      a {
        color: #555; /* Text color */
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
        transition: color 0.3s ease, text-decoration 0.3s ease;

        &:hover {
          color: #007bff;
          text-decoration: underline; /* Underline on hover */
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      {/* First Column: Logo and Social Media Icons */}
      <LogoSection>
        <img src="./images/logo.png" alt="Logo" />
        <div className="connect"><h4>Connect with us</h4></div> {/* Added text */}
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </LogoSection>

      {/* Second Column: Basic Nav Links */}
      <NavColumn>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </NavColumn>

      {/* Third Column: Support */}
      <NavColumn>
        <h4>Support</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </NavColumn>

      {/* Fourth Column: Company */}
      <NavColumn>
        <h4>Company</h4>
        <ul>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Investors</a></li>
        </ul>
      </NavColumn>
    </FooterContainer>
  );
};

export default Footer;
