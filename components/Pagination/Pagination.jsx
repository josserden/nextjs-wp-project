import React from 'react';

export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <div className="container mt-10 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} className="btn" onClick={() => onPageClick(i + 1)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
};
