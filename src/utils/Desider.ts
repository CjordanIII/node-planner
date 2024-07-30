
import { defaultNode } from './addNode';

export const desider = (type:any) => {
    if (type == "Default Node") {
      defaultNode.defaultNode()
    }
    if (type == "Connector node") {
        defaultNode.connectorNode()
    }
}
