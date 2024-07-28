/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Background,
  ControlButton,
  Controls,
  EdgeChange,
  NodeChange,
  ReactFlow,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  useNodeId,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Down from "../assets/icons/Down";
import Up from "../assets/icons/Up";
import Workbench from "../components/workbench/bottom_work_bench/Workbench";
const initialNodes = [
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

const initialEdges: any[] = [];

const WorkBoard = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeId = useNodeId();

  const onNodesChange = useCallback(
    (
      changes: NodeChange<
        | {
            id: string;
            data: { label: string };
            position: { x: number; y: number };
            type: string;
          }
        | {
            id: string;
            data: { label: string };
            position: { x: number; y: number };
            type?: undefined;
          }
      >[]
    ) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<any>[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  // Delete objects
  console.log(nodeId);
  const onNodesDelete = useCallback(
    (deleted: any[]) => {
      setEdges(
        deleted.reduce((acc: any[], node: any) => {
          const incomers = getIncomers(node, nodes, edges);
          const outgoers = getOutgoers(node, nodes, edges);
          const connectedEdges = getConnectedEdges([node], edges);

          const remainingEdges = acc.filter(
            (edge: any) => !connectedEdges.includes(edge)
          );

          const createdEdges = incomers.flatMap(({ id: source }) =>
            outgoers.map(({ id: target }) => ({
              id: `${source}->${target}`,
              source,
              target,
            }))
          );

          return [...remainingEdges, ...createdEdges];
        }, edges)
      );
    },
    [nodes, edges]
  );

  const [isWorkbench, setIsWorkbench] = useState(false);

  return (
    <div className={`${isWorkbench ? "h-40" : "h-dvh "} `}>
      <ReactFlow
        onNodesDelete={onNodesDelete}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onClick={(e) => console.log(e)}
      >
        <Background />

        <button style={{ position: "absolute" }}>Click to add node</button>

        <Controls>
          <ControlButton onClick={() => setIsWorkbench((prev) => !prev)}>
            {isWorkbench ? <Down /> : <Up />}
          </ControlButton>
        </Controls>
      </ReactFlow>
      {isWorkbench && <Workbench />}
    </div>
  );
};

export default WorkBoard;
