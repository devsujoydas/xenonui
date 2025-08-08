import { useState, useRef } from "react";

const Accordion1 = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="border border-zinc-300 rounded-md overflow-hidden shadow-sm mb-3">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-zinc-100 hover:bg-zinc-200 transition-all"
      >
        <span className="text-left font-medium text-black">{title}</span>
        <svg
          className={`w-5 h-5 text-zinc-700 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden bg-white"
      >
        <div className="p-4 text-zinc-600">{children}</div> 
      </div>
    </div>
  );
};

export default Accordion1;
