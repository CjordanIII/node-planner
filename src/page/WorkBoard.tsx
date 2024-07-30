/* eslint-disable react-hooks/exhaustive-deps */
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Down from "../assets/icons/Down";
import Up from "../assets/icons/Up";
import Workbench from "../components/workbench/bottom_work_bench/Workbench";
import { initialEdges, initialNodes } from "../constraints/nodesArrgs";
import { DefaultArr, defaultNode } from "../utils/addNode";
import { desider } from "../utils/Desider";

const WorkBoard = () => {
  const [nodes, setNodes] = useState<DefaultArr[]>(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const nodeValue = useSelector((state: any) => state.node.value);
  const dispatch = useDispatch();
  // TODO create redux state to keep configuation in sate.

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
    [defaultNode.arrayData]
  );
  const onConnect = useCallback(
    (params: any) => {
      setEdges((eds) => addEdge(params, eds));
    },
    [defaultNode.arrayData]
  );
  // Delete objects
  useEffect(() => {
    setNodes((prev) => [...prev, ...defaultNode.arrayData]);
    console.log("re render", nodes);
  }, [defaultNode.arrayData]);
  const handleAddNode = () => {
    desider(nodeValue.nameOfNode);
    setNodes((prev) => [...prev, ...defaultNode.arrayData]);
  };

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
      >
        <Background />

        <button
          onClick={() => {
            handleAddNode();
          }}
          style={{ zIndex: 1001 }}
          className="absolute top-8 cursor-pointer btn"
        >
          Click to add node
        </button>

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
