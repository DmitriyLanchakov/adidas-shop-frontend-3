import React from 'react';
import Sidebar from './Sidebar';
import Catalog from './Catalog';
import './List.css';

export default () => {
  return (
    <div className="container">
      <Sidebar />
      <Catalog />
    </div>
  );
};
