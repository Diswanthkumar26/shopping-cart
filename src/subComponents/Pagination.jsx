import React from "react";

const Pagination = ({ currentPage, totalPages, onPrevious, onNext }) => {
  return (
    <div className="flex justify-center items-center mt-6 mb-6 gap-2">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded text-white ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Previous
      </button>

      <span className="px-4 py-2 rounded bg-gray-200 text-gray-800 font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded text-white ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
