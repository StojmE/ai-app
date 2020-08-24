import React from "react";
import "./style.scss";

export function Button({ children, className, onClick }) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function ButtonCircle({ className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`check-button  ` + `${className}`}
    />
  );
}
