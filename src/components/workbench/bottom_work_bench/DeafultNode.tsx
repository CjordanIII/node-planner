import { useDispatch } from "react-redux";
import Rectangle from "../../../assets/icons/Rectangle";
import { nodeSelecter } from "../../../features/node/nodeSlice";

const DeafultNode = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      value="Default"
      onClick={() => {
        dispatch(nodeSelecter("Default"));
      }}
    >
      <Rectangle />
    </button>
  );
};

export default DeafultNode;
