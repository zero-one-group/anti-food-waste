import { render } from '@testing-library/react';

import NavGroup from './nav-group';

describe('NavGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavGroup />);
    expect(baseElement).toBeTruthy();
  });
});
