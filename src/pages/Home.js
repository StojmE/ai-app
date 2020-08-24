import React, { useState } from "react";
import "../App.scss";
import SearchBar from "../components/search-bar/SearchBar";
import Tab from "../components/tab/Tab";
import * as W from "../components/wrappers/Wrappers";
import AgentList from "../items/agent-list/AgentList";
import { Button } from "../components/button/Button";
import { AgentsApiCustom } from "../api";
import { useHistory } from "react-router-dom";
import { Paragraph } from "../components/typography/Typography";

const agents = new AgentsApiCustom();
export default function Home() {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");
  const filterAgents = agents.searchAgents(searchValue);
  const [active, setActive] = useState(false);
  const [checked, setCheck] = useState([]);
  const routeChangeOverview = () => history.push("./overview");
  const routeChangeCompare = () => history.push("./compare");

  const checkAgent = (agentID) =>
    setCheck(
      checked.includes(agentID)
        ? checked.filter((id) => id !== agentID)
        : [...checked, agentID]
    );

  const description = active
    ? "// Select two algorithms and compare them"
    : "// Select an algorithm to see details || click The Compare Tab";

  return (
    <>
      <W.MainWrapper>
        <W.SearchWrapper>
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </W.SearchWrapper>
        <W.CompareItemsWrapper>
          <Tab
            onClick={() => setActive(!active)}
            className={active ? "active" : ""}
          >
            Compare Algorithms
          </Tab>
          <Paragraph>{description}</Paragraph>
        </W.CompareItemsWrapper>
        <W.AlgorithmsListWrapper>
          <AgentList
            list={filterAgents}
            state={active}
            link={routeChangeOverview}
            checked={checked}
            checkAgent={checkAgent}
          />
        </W.AlgorithmsListWrapper>
        {active && (
          <W.CompareNavigationWrapper>
            <Button onClick={routeChangeCompare}>Start Compare</Button>
          </W.CompareNavigationWrapper>
        )}
      </W.MainWrapper>
    </>
  );
}
