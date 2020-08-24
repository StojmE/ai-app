import React from "react";
import "./style.scss";

export default function Panel({ children, className, onClick }) {
  return <div className={"panel" + className} onClick={onClick}>{children}</div>;
}
