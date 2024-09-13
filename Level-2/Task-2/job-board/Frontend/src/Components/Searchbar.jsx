import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for styling
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
`;

const SearchInput = styled.input`
  width: 60%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 14px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007BFF;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  background-color: #007BFF;
  color: white;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Handle search query submission
  const handleSearch = () => {
    const [title, location, workType] = query.split(';'); // Split query based on some delimiter or adjust as needed
    onSearch(new URLSearchParams({ title, location, workType }).toString());
  };

  // Handle "Enter" key press for search using onKeyDown
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}  
        placeholder="Search jobs..."
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
