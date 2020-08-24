import React from "react";
import "./style.scss";

export function Paragraph({ children }) {
    return <p>{children}</p>;
}

export function PanelHeader({ children }) {
    return <h4>{children}</h4>;
}

export function OverviewHeader({ children }) {
    return <h2>{children}</h2>;
}

export function SmallText({ children, className }) {
    return <span className={className}>{children}</span>;
}

export function AIDescription({ children }) {
    return <p className="description">{children}</p>;
}