import React from 'react';

import './pagination.css';

export interface PaginationProps {
  currentPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination = ({
  currentPage,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <div style={{ margin: '20px 0px 20px 0' }}>
      <button
        disabled={!hasPrevious}
        onClick={onPrevious}
        className="star-wars-button"
      >
        Previous
      </button>
      <span style={{ margin: '0 10px 0 10px' }}>{currentPage}</span>
      <button disabled={!hasNext} onClick={onNext} className="star-wars-button">
        Next
      </button>
    </div>
  );
};
