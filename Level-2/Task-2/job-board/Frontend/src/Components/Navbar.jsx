import React from 'react';
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
      height: 100px;
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
  return (
    <NavbarContainer>
      <div className="logo">
        <Link to="/"><img src="./images/logo.png" alt="Logo" /></Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse-jobs">Browse Jobs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
      <div className="buttons">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/create-account"><button>Create Account</button></Link>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
