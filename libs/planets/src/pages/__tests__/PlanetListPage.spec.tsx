import { render } from '@testing-library/react';

import PlanetListPage from '../PlanetListPage';

describe('Planets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlanetListPage />);
    expect(baseElement).toBeTruthy();
  });
});
