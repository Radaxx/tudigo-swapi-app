import { ReactNode } from 'react';

interface CardGridProps {
  children: ReactNode;
}

export const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem',
      }}
    >
      {children}
    </div>
  );
};
