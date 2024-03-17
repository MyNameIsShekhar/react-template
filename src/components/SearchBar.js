import React from 'react';
import './SearchBar.css'; // Import CSS file for styling

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
    </div>
  );
}

export default SearchBar;

