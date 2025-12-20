import React, { useState, useEffect, useRef } from "react";

function AddSection({ handleButton, title, setTitle, details, setDetails }) {
  const [expanded, setExpanded] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = expanded ? "hidden" : "";
    if (expanded && titleRef.current) titleRef.current.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const onSubmit = (e) => {
    handleButton(e);
    setExpanded(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!expanded && (
        <div
          onClick={() => setExpanded(true)}
          className="bg-gray-100 rounded-lg shadow mb-6 cursor-pointer"
        >
          <div className="flex  items-center gap-3  p-3 ">
            <div className="flex-1 text-left text-gray-600">Take a note...</div>
            <div className="text-sm text-gray-400">Click to expand</div>
          </div>
        </div>

      )}

      {expanded && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center p-6 bg-black/40"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setExpanded(false);
          }}
        >
          <form
            onSubmit={onSubmit}
            className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">New Note</h2>
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
              >
                Close
              </button>
            </div>

            <input
              ref={titleRef}
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required 
              className="w-full border-0 border-b border-gray-200 focus:border-indigo-300 px-1 py-3 text-lg font-medium mb-4 outline-none"
            />

            <textarea
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={6}
              required 
              className="w-full border border-gray-200 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddSection;
