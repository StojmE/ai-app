import React from "react";
import "./style.scss";

export default function SearchBar({ searchValue, setSearchValue }) {
  return (
    <div className="search-item">
      <input
        type="search"
        id="search-input"
        className="search-input"
        placeholder="Select Algorithm.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="search-icon">
        <i className="fa fa-search" />
      </div>
    </div>
  );
}
