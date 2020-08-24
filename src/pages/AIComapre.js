import React from "react";
import * as W from "../components/wrappers/Wrappers";
import { OverviewHeader } from "../components/typography/Typography";
import ScorePanel from "../items/score-panel/ScorePanel";
import * as agent from "../custom";
import { Button } from "../components/button/Button";

export default function AIOverview(props) {
  const routeReturn = () => props.history.goBack();

  return (
    <W.AiCompareWrapper>
      <W.AiCompareItemWrapper>
        <W.AiOverviewTitle>
          <OverviewHeader>{agent.name}</OverviewHeader>
        </W.AiOverviewTitle>
        <ScorePanel category={"memory"} avarage={agent.memory} />
        <ScorePanel category={"logic"} avarage={agent.logic} />
        <ScorePanel category={"planning"} avarage={agent.planning} />
      </W.AiCompareItemWrapper>
      <W.AiCompareItemWrapper>
        <W.AiOverviewTitle>
          <OverviewHeader>{agent.name}</OverviewHeader>
        </W.AiOverviewTitle>
        <ScorePanel category={"memory"} avarage={agent.memory} />
        <ScorePanel category={"logic"} avarage={agent.logic} />
        <ScorePanel category={"planning"} avarage={agent.planning} />
      </W.AiCompareItemWrapper>
      <W.AiReturnWrapper>
        <Button onClick={routeReturn}>Return</Button>
      </W.AiReturnWrapper>
    </W.AiCompareWrapper>
  );
}
