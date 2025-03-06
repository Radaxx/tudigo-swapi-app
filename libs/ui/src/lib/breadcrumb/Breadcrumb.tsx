import { Link } from 'react-router-dom';

export interface CrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: CrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" style={{ marginBottom: '10px' }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        if (item.path && !isLast) {
          return (
            <span key={index}>
              <Link to={item.path}>{item.label}</Link>
              {' / '}
            </span>
          );
        }

        return (
          <span key={index}>
            {item.label}
            {!isLast && ' / '}
          </span>
        );
      })}
    </nav>
  );
};
