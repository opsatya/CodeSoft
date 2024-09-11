import React, { useState } from 'react';
import styled from 'styled-components';

const CreateAccountPage = () => {
  const [accountType, setAccountType] = useState('');

  const handleAccountType = (type) => {
    setAccountType(type);
  };

  return (
    <PageContainer>
      <h1>Create Account</h1>
      <ButtonContainer>
        <button onClick={() => handleAccountType('user')}>Create User Account</button>
        <button onClick={() => handleAccountType('company')}>Create Company Account</button>
      </ButtonContainer>

      {accountType === 'user' && (
        <UserForm>
          <h2>User Account Form</h2>
          <form>
            <div className="input-group">
              <label htmlFor="FirstName">First Name:</label>
              <input type="text" id="FirstName" name="FirstName" />
            </div>

            <div className="input-group">
              <label htmlFor="LastName">Last Name:</label>
              <input type="text" id="LastName" name="LastName" />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
              </div>
            </div>

            <button type="submit">Create User Account</button>
          </form>
        </UserForm>
      )}

      {accountType === 'company' && (
        <CompanyForm>
          <h2>Company Account Form</h2>
          <form>
            <div className="input-group">
              <label htmlFor="companyName">Company Name:</label>
              <input type="text" id="companyName" name="companyName" />
            </div>

            <div className="input-group">
              <label htmlFor="email">Company Email:</label>
              <input type="email" id="companyEmail" name="companyEmail" />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" />
              </div>
            </div>

            <button type="submit">Create Company Account</button>
          </form>
        </CompanyForm>
      )}
    </PageContainer>
  );
};

export default CreateAccountPage;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: 'Poppins', sans-serif;

  h1 {
    margin-bottom: 20px;
    font-size: 2.5rem;
    color: #333;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;

  button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const UserForm = styled.div`
  width: 50%;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .input-group {
      display: flex;
      flex-direction: column;

      label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      input {
        padding: 10px;
        font-size: 14px;
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 100%;
      }
    }

    .input-row {
      display: flex;
      gap: 20px;

      .input-group {
        flex: 1;
      }
    }

    button {
      background-color: #28a745;
      color: white;
      padding: 12px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;

      &:hover {
        background-color: #218838;
      }
    }
  }
`;

const CompanyForm = styled(UserForm)`
  // Reuse UserForm styles for CompanyForm
  .input-row {
    display: flex;
    gap: 20px;
  }
`;
