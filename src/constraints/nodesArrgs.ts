import { v4 as uuidv4 } from "uuid";
export const initialNodes = [
  {
    id: uuidv4(),
    data: { label: "Hello" },
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    type: "input",
  },
  {
    id: uuidv4(),
    data: { label: "World" },
    position: { x: Math.random() * 500, y: Math.random() * 500 },
  },
];

export const initialEdges: Array<T> = [];