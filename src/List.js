import React from 'react';
import Sidebar from './Sidebar';
import List from './List';
import './List.css';

export default () => {
  return (
    <div className="container">
      <Sidebar />
      <main className="catalog">
        <h2>Items Catalog</h2>
        <nav className="catalog-filters">
          <span className="filters-icon"></span>
          <div className="filter-container">
            <button className="filter-button men current">Men</button>
            <button className="filter-button">Women</button>
          </div>
          <div className="filter-container">
            <span className="filter-heading">Size</span>
            <button className="filter-button">36</button>
            <button className="filter-button">37</button>
            <button className="filter-button">38</button>
            <button className="filter-button">39</button>
            <button className="filter-button">40</button>
            <button className="filter-button current">41</button>
            <button className="filter-button">42</button>
          </div>
        </nav>
        <List />
      </main>
    </div>
  );
};
