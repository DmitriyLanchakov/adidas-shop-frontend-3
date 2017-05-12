import React from 'react';
import Details from './Details'
import './Show.css';
import Sidebar from './Sidebar';

export default () => {
  return (
    <div className="container">
      <Sidebar />
      <Details />
    </div>
  );
};
