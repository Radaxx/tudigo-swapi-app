import { ReactNode } from 'react';

export interface CardProps<T> {
  data: T;
  renderTitle: (data: T) => ReactNode;
  renderContent: (data: T) => ReactNode;
}

export const Card = <T,>({
  data,
  renderTitle,
  renderContent,
}: CardProps<T>) => {
  return (
    <div
      style={{
        border: '2px dotted #FFE81F',
        padding: '1rem',
        borderRadius: '2px',
        color: '#333',
      }}
    >
      <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {renderTitle(data)}
      </div>
      <div>{renderContent(data)}</div>
    </div>
  );
};
