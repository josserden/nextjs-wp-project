import React from 'react';

export const Pagination = ({ totalPages }) => {
  return (
    <div className="container mt-10 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} className="btn">
          {i + 1}
        </button>
      ))}
    </div>
  );
};
