import { render } from '@testing-library/react';

import PeopleListPage from '../PeopleListPage';

describe('People', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PeopleListPage />);
    expect(baseElement).toBeTruthy();
  });
});
