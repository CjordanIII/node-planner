import { useDispatch } from "react-redux";
import RectangleTwoEdges from "../../../assets/icons/RectangleTwoEdges";
import { nodeSelecter } from "../../../features/node/nodeSlice";

const NodeWithTwoEdges = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
      value="Connector"
      onClick={() => {
        dispatch(nodeSelecter("Connector"));
      }}
    >
      <RectangleTwoEdges />
    </button>
  );
};

export default NodeWithTwoEdges;
