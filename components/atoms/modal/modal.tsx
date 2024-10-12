import React from "react";

const Modal = ({
  children,
  onClose,
}: Readonly<{
  children: React.ReactNode;
  onClose: () => void;
}>) => {
  return (
    <div
      className="fixed left-0 top-0 z-[1000] bg-overlay-color w-[100vw] h-[100vh]"
      onClick={() => onClose()}
    >
      <div
        className="bg-black"
        style={{
          background: "white",
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: 8,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
