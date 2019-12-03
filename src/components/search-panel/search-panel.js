import React from 'react';
import './search-panel.css';

const SearchPanel=()=>{
  const searchText='Type here to search';
  return (
      <div className="search-panel-form">
            <input type="text"
                className="form-control search-input"
                placeholder={ searchText }/>
      </div>
  );
};

export default SearchPanel;
