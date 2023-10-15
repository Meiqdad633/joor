import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keywords = searchParams.get('keywords');
  const city = searchParams.get('city');

  // Use the 'keywords' and 'city' values to perform the database search
  // and display the results here.

  return (
    <div>
      <h2>Search Results</h2>
      <p>Keywords: {keywords}</p>
      <p>City: {city}</p>
      {/* Display search results here */}
    </div>
  );
};

export default SearchResults;
