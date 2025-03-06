import React from 'react';

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
    <div style={{ marginTop: '20px' }}>
      <button
        disabled={!hasPrevious}
        onClick={onPrevious}
        style={{ marginRight: '10px' }}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      <button
        disabled={!hasNext}
        onClick={onNext}
        style={{ marginLeft: '10px' }}
      >
        Next
      </button>
    </div>
  );
};
