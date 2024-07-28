import { useState } from "react";
import Node from "./work_bench_options/Node";
import NodeMenu from "./work_bench_options/NodeMenu";
const Workbench = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="drop-shadow-2xl mt-6 ">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-start px-4 py-16">
          <Node setIsShowing={setIsShowing} />
        </div>
        {isShowing && <NodeMenu />}
      </div>
    </div>
  );
};

export default Workbench;
