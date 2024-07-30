import { v4 as uuidv4 } from "uuid";

export interface DefaultArr {
  id: string;
  data: { label: string };
  position: { x: number; y: number };
  type: string;
}

export class AddNode {
  arr: Array<DefaultArr> = [];
  defaultNode() {
    

    const data: DefaultArr = {
      id: uuidv4(),
      data: { label: "Hello" },
      position: { x: 0, y: 0 },

      type: "input",
    };
    this.arr.push(data);
  }
  connectorNode() {
    const data: DefaultArr = {
      id: uuidv4(),
      data: { label: "World" },
      position: { x: 100, y: 100 },
      type: "",
    };
    this.arr.push(data);
  }
  get arrayData() {
    return this.arr;
  }
}

export const defaultNode = new AddNode();
