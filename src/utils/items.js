import { v4 as uuidv4 } from "uuid";
export const columns = [
  "Goal 1: Grow customers by 25%",
  "Goal 2: Reduce office suplly costs by 15%",
  "Goal Template",
  "Done Q1",
  "Done Q2"
];
export const items = {
  "Done Q1": [
    {
      id: uuidv4(),
      content: "First task",
      badge: "Trello tip"
    },
    {
      id: uuidv4(),
      content: "Second task",
      badge: "Trello tip"
    }
  ],
  "Done Q2": [
    {
      id: uuidv4(),
      content: "Third task",
      badge: "On Track"
    }
  ],
  "Goal 1: Grow customers by 25%": [
    {
      id: uuidv4(),
      content: "Fourth task",
      badge: "In Progress"
    },
    {
      id: uuidv4(),
      content: "Seventh task",
      badge: "In Progress"
    }
  ],
  "Goal 2: Reduce office suplly costs by 15%": [
    {
      id: uuidv4(),
      content: "Eighth task",
      badge: "In Progress"
    }
  ],
  "Goal Template": [
    {
      id: uuidv4(),
      content: "Fifth task",
      badge: "Trello tip"
    },
    {
      id: uuidv4(),
      content: "Sixth task",
      badge: "In Progress"
    }
  ]
};
