let currentId = 1;
/** Returns a new unique ID at every invocation. */
function nextId() {
  return currentId++;
}
/** Returns a random number between min and max. */
function randomBetween(min, max) {
  const rand = Math.random();
  const span = max - min;
  return rand * span + min;
}
/** Returns true a random percentage of invocations. */
function randomCondition(percentageTrue) {
  const rand = Math.random();
  return rand < percentageTrue;
}
const MIN_LATENCY_MS = 100;
const MAX_LATENCY_MS = 3000;
const FAILURE_RATE = 0.05; /* 5% API calls fail */
/**
 * Returns the data as a Promise, delayed by a random latency and
 * occasionally failing with an error.
 * */
function asFallibleAsyncResponse(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomCondition(FAILURE_RATE)) {
        reject(new Error("API Error - database unavailable."));
      } else {
        resolve(data);
      }
    }, randomBetween(MIN_LATENCY_MS, MAX_LATENCY_MS));
  });
  return Promise.resolve(data);
}

// == Fake API Service ==
/** API service to use to complete the project.*/
class AgentsApi {
  listAgents() {
    return asFallibleAsyncResponse(AGENTS);
  }
  searchAgents(nameSubstr) {
    return asFallibleAsyncResponse(
      AGENTS.filter((agent) => agent.name.includes(nameSubstr))
    );
  }
  getAgent(id) {
    return asFallibleAsyncResponse(AGENTS.find((agent) => agent.id === id));
  }
}

//TODO
export class AgentsApiCustom {
  listAgents() {
    return AGENTS;
  }
  searchAgents(nameSubstr) {
    return AGENTS.filter((agent) => agent.name.includes(nameSubstr));
  }
  getAgent(id) {
    return AGENTS.find((agent) => agent.id === id);
  }
}

/** Fake list of agents. */
const AGENTS = [
  {
    id: nextId(),
    name: "IMPALA",
    description:
      "Scalable Distributed Deep-RL with Importance Weighted Actor-Learner Architectures",
    tasks: [
      {
        id: "mem_1",
        name: "Blackjack",
        category: "memory",
        score: 56,
      },
      {
        id: "mem_2",
        name: "Q-bert",
        category: "memory",
        score: 61,
      },
      {
        id: "logic_1",
        name: "Breakout",
        category: "logic",
        score: 79,
      },
      {
        id: "logic_2",
        name: "Tetris",
        category: "logic",
        score: 21,
      },
      {
        id: "logic_3",
        name: "Basic Math",
        category: "logic",
        score: 54,
      },
      {
        id: "planning_1",
        name: "Pacman",
        category: "planning",
        score: 58,
      },
    ],
  },
  {
    id: nextId(),
    name: "AlphaZero",
    description:
      "Generalisation of AlphaGo Zero that can achieve, tabula rasa, superhuman performance in many challenging domains such as Chess, Shogi and Go.",
    tasks: [
      {
        id: "mem_1",
        name: "Blackjack",
        category: "memory",
        score: 37,
      },
      {
        id: "mem_2",
        name: "Q-bert",
        category: "memory",
        score: 29,
      },
      {
        id: "logic_1",
        name: "Breakout",
        category: "logic",
        score: 78,
      },
      {
        id: "logic_2",
        name: "Tetris",
        category: "logic",
        score: 92,
      },
      {
        id: "logic_3",
        name: "Basic Math",
        category: "logic",
        score: 88,
      },
      {
        id: "planning_1",
        name: "Pacman",
        category: "planning",
        score: 100,
      },
    ],
  },
  {
    id: nextId(),
    name: "R2D3",
    description:
      "Making Efficient Use of Demonstrations to Solve Hard Exploration Problems.",
    tasks: [
      {
        id: "mem_1",
        name: "Blackjack",
        category: "memory",
        score: 85,
      },
      {
        id: "mem_2",
        name: "Q-bert",
        category: "memory",
        score: 73,
      },
      {
        id: "logic_1",
        name: "Breakout",
        category: "logic",
        score: 28,
      },
      {
        id: "logic_2",
        name: "Tetris",
        category: "logic",
        score: 26,
      },
      {
        id: "logic_3",
        name: "Basic Math",
        category: "logic",
        score: 44,
      },
      {
        id: "planning_1",
        name: "Pacman",
        category: "planning",
        score: 72,
      },
    ],
  },
];


// console.log(new AgentsApiCustom().listAgents().length);