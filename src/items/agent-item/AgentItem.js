import React from "react";
import Panel from "../../components/panel/Panel";
import { ButtonCircle } from "../../components/button/Button";

export default function AgentItem({
  checkAgent,
  isChecked,
  state,
  link,
  agent: { id, name },
}) {

  return (
    <Panel
      onClick={state ? null : link}
      className={state ? "" : " clickable"}
    >
      {name}
      {state && (
        <ButtonCircle
          onClick={() => checkAgent(id)}
          className={isChecked ? "filled" : ""}
        />
      )}
    </Panel>
  );
}
