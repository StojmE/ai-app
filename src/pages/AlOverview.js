import React from "react";
import * as W from "../components/wrappers/Wrappers";
import {
  OverviewHeader,
  AIDescription,
} from "../components/typography/Typography";
import ScorePanel from "../items/score-panel/ScorePanel";
import * as agent from "../custom";
import { Button } from "../components/button/Button";

export default function AIOverview(props) {
  const routeReturn = () => props.history.goBack();

  return (
    <W.AiOverviewWrapper>
      <W.AiOverviewTitle>
        <OverviewHeader>{agent.name}</OverviewHeader>
      </W.AiOverviewTitle>
      <W.AiOverviewDescription>
        <AIDescription>{agent.description}</AIDescription>
      </W.AiOverviewDescription>
      <W.AiOverviewTaskAvg>
        <ScorePanel category={"memory"} avarage={agent.memory} />
        <ScorePanel category={"logic"} avarage={agent.logic} />
        <ScorePanel category={"planning"} avarage={agent.planning} />
      </W.AiOverviewTaskAvg>
      <W.AiReturnWrapper>
        <Button onClick={routeReturn}>Return</Button>
      </W.AiReturnWrapper>
    </W.AiOverviewWrapper>
  );
}
