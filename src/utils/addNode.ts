import { v4 as uuidv4 } from "uuid";

interface defaultArr{
    id: string,
    data: { label: string },
    position: { x: number, y: number },
    type:string
}


export class AddNode {
     arr:Array<T> = []
    defaultNode() {
       
        const data: defaultArr = {
            
      id: uuidv4(),
      data: { label: "Hello" },
      position: { x: 0, y: 0 },
      type: "input",
    }
      this.arr.push(data)
    
    }
    get arrayData() {
       return this.arr
   }
}


export const defaultNode  = new AddNode()

 