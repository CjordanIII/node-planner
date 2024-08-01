import { useRef } from "react";

const NodeInput = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };
  return (
    <>
      <button
        onClick={openModal}
        style={{ zIndex: 1001 }}
        className="btn absolute "
      >
        Open modal
      </button>
      <dialog
        ref={modalRef}
        id="my_modal_2"
        style={{ zIndex: 1001 }}
        className="modal absolute "
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default NodeInput;
