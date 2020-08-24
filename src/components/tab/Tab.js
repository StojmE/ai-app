import React from "react";
import "./style.scss";

export default function Tab({ children, className, onClick }) {
  return (
    <button
      type="button"
      id="compare-tab"
      onClick={onClick}
      className={`tab-button ` + `${className}`}
    >
      {children}
    </button>
  );
}
