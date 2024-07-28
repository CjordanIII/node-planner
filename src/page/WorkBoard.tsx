/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Background,
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Workbench from "../components/workbench/bottom_work_bench/Workbench";

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges: any[] = [];

const WorkBoard = () => {
  console.log(uuidv4());
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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
  return (
    <div className="h-dvh">
      <ReactFlow
        onNodesDelete={onNodesDelete}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />

        <Workbench />
      </ReactFlow>
    </div>
  );
};

export default WorkBoard;
