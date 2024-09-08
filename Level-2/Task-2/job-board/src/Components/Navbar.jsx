import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
font-family: "Poppins", system-ui;
   display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  color: black;

  .logo {
    img {
      height: 100px; /* Slightly reduced */
      transform: scale(2.9);
    }
  }

  ul {
    list-style: none;
    display: flex;
    gap: 30px; 
    
    li {
      position: relative;

      a {
        color: black;
        text-decoration: none;
        font-size: 18px; 
        font-weight: 500;
        padding: 8px 16px;

        &:hover {
          background-color: #007bff;
          color: white;
          border-radius: 5px;
          transition: background-color 0.3s ease-in-out;
        }
      }
      
      // Dropdown menu
      ul {
        display: none;
        position: absolute;
        top: 40px;
        left: 0;
        background-color: white;
        border: 1px solid #ddd;
        list-style: none;
        padding: 10px 0;
        min-width: 180px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

        li {
          a {
            padding: 8px 16px;
            display: block;
            color: #333;
            &:hover {
              background-color: #f1f1f1;
            }
          }
        }
      }

      &:hover ul {
        display: block;
      }
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    button {
      background-color: #28a745; 
      color: white;
      border: none;
      padding: 10px 20px;
      margin-left: 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #218838;
      }
    }

    button:nth-child(2) {
      background-color: #ffc107; 
      &:hover {
        background-color: #e0a800;
      }
    }
  }
`;

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <NavbarContainer>
      <div className="logo">
        <a href="#"><img src="./images/logo.png" alt="Logo" /></a>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/jobs">Browse Job</Link></li>
        <li>
          <Link to="/pages">Pages</Link>
          {/* Dropdown for Pages */}
          <ul>
            <li><Link to="/pages/about">About Us</Link></li>
            <li><Link to="/pages/pricing">Pricing</Link></li>
          </ul>
        </li>
        <li>
            <Link to="/blog">Blog</Link>
             {/* Dropdown for Pages */}
            <ul>
              <li><Link to="/blog/post">Post</Link></li>
              <li><Link to="/blog/category">Category</Link></li>
            </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="buttons">
        <button>Login</button>
        <button>Post a Job</button>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;