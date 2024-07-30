
import { defaultNode } from './addNode';

export const desider = (type:string) => {
    if (type == "Default") {
      defaultNode.defaultNode()
    }
    if (type == "Connector") {
        defaultNode.connectorNode()
    }
}
