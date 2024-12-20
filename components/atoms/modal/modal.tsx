import React, { useEffect, useRef } from "react";

const Modal = ({
  children,
  onClose,
  className,
}: Readonly<{
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}>) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[1000] bg-overlay-color w-[100vw] h-[100vh]">
      <button
        style={{
          position: "fixed",
          top: "30px",
          right: "30px",
        }}
        onClick={() => onClose && onClose()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="close-icon"
          width="24"
          height="24"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div
        className={className}
        style={{
          background: "white",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: 8,
        }}
        ref={modalRef}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
