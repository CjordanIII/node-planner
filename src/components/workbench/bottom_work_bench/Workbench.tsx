import { useState } from "react";
const Workbench = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="drop-shadow-2xl mt-6 ">
      <div className="mockup-window bg-base-300 border">
        <div className="bg-base-200 flex justify-center px-4 py-16">Hello!</div>
      </div>
    </div>
  );
};

export default Workbench;
