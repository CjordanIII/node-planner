import { v4 as uuidv4 } from "uuid";
export const initialNodes = [
  {
    id: uuidv4(),
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: uuidv4(),
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

export const initialEdges: Array<T> = [];