import React from "react";
import "./style.scss";

export function MainWrapper({ children }) {
  return <main className="main-wrapper">{children}</main>;
}

export function SearchWrapper({ children }) {
  return <section className="search-wrapper">{children}</section>;
}

export function CompareItemsWrapper({ children }) {
  return <section className="tab-compare-wrapper">{children}</section>;
}

export function AlgorithmsListWrapper({ children }) {
  return <section className="list-wrapper">{children}</section>;
}

export function CompareNavigationWrapper({ children }) {
  return <section className="compare-navigation-wrapper">{children}</section>;
}

export function AiOverviewWrapper({ children }) {
  return <main className="ai-overview-wrapper">{children}</main>;
}

export function AiOverviewTitle({ children }) {
  return <section className="ai-overview-title">{children}</section>;
}

export function AiOverviewTaskAvg({ children }) {
  return <section className="ai-overview-task-avg">{children}</section>;
}

export function AiOverviewDescription({ children }) {
  return <main className="ai-overview-description">{children}</main>;
}

export function AiCompareWrapper({ children }) {
  return <main className="ai-compare-wrapper">{children}</main>;
}

export function AiCompareItemWrapper({ children }) {
  return <main className="ai-compare-item">{children}</main>;
}

export function AiReturnWrapper({ children }) {
  return <main className="ai-return-wrapper">{children}</main>;
}
