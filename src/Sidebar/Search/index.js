import React from 'react';

export default () => {
  return (
    <form className="search-form">
      <label htmlFor="search-input" className="search-input-label">Search</label>
      <input type="text" name="search" className="search-form-input" id="search-input" />
    </form>
  );
};
