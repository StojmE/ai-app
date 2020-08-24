import React from "react";
import "./style.scss";
import Panel from "../../components/panel/Panel";
import { PanelHeader } from "../../components/typography/Typography";
import ScoreBar from "../../components/score-bar/ScoreBar";

export default function ScorePanel({ children, category, avarage }) {
  const title = category.slice(0, 1).toUpperCase() + category.slice(1, category.length);

  return (
    <Panel className=" score-panel">
      <PanelHeader>{title}</PanelHeader>
      <ScoreBar category={category} avarge={avarage}/>
    </Panel>
  );
}
