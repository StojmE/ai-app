import React from "react";
import { SmallText } from "../typography/Typography";
import "./style.scss";

export default function ScoreBar({ category, avarge }) {
  return (
    <div className="score-wrapper">
      <div className="score-bar">
        <div className={`score-filling ${category}`} style={{ width: `${avarge}%` }} />
      </div>
      <SmallText className="average-state">
        Average Score: {avarge.toString()}
      </SmallText>
    </div>
  );
}
