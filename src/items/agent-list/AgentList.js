import React from "react";
import AgentItem from "../agent-item/AgentItem";

export default function ApartmentList({ list, checked, setCheck, checkAgent, state, link }) {
  return (
    <>
      {list.map((agent) => (
        <AgentItem
          isChecked={checked.includes(agent.id)}
          checkAgent={checkAgent}
          key={agent.id}
          agent={agent}
          state={state}
          link={link}
        />
      ))}
    </>
  );
}
