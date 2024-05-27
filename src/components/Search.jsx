import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      className="input"
      type="text"
      placeholder="Search for a meal..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default Search;
