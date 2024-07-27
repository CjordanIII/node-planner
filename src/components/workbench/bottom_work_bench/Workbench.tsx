import { useState } from "react";
import HamberBars3 from "../../../assets/icons/HamberBars3";
import Tools from "./Tools";
const Workbench = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="drop-shadow-2xl mt-6 ">
      {isShowing ? (
        <>
          <div className={`navbar drop-shadow-2xl rounded-full bg-slate-500`}>
            <div className="flex-none">
              <button
                onClick={() => setIsShowing((prev) => !prev)}
                className="btn btn-square btn-ghost"
              >
                <HamberBars3 />
              </button>
            </div>
            <div className="flex-1">
              <button className="btn btn-ghost text-xl">
                <Tools />
              </button>
            </div>
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => setIsShowing((prev) => !prev)}
          className="btn btn-neutral rounded-full"
        >
          <HamberBars3 />
        </button>
      )}
    </div>
  );
};

export default Workbench;
