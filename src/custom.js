import { AgentsApiCustom } from "./api";

const agents = new AgentsApiCustom();

const index = 1;
export const name = agents.listAgents()[index].name;
export const description = agents.listAgents()[index].description;
export const taskList = agents.listAgents()[index].tasks;

function getCategoryNumber(list, category) {
  let counter = 0;
  let sumScore = 0;
  list.forEach((item) => {
    if (item.category === category) {
      counter++;
      sumScore += item.score;
    }
  });
  return Math.round(sumScore / counter);
}

export const memory = getCategoryNumber(taskList, "memory");
export const logic = getCategoryNumber(taskList, "logic");
export const planning = getCategoryNumber(taskList, "planning");
