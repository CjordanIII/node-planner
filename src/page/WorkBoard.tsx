import { Background, Controls, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Workbench from "../components/workbench/bottom_work_bench/Workbench";

const WorkBoard = () => {
  return (
    <div className="h-dvh">
      <ReactFlow>
        <Background />
        <Controls />
        <Workbench />
      </ReactFlow>
    </div>
  );
};

export default WorkBoard;
