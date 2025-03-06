import { render } from '@testing-library/react';

import Planets from './planets';

describe('Planets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Planets />);
    expect(baseElement).toBeTruthy();
  });
});
