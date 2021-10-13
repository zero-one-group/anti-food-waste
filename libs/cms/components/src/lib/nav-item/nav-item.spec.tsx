import { render } from '@testing-library/react';

import NavItem from './nav-item';

describe('NavItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavItem />);
    expect(baseElement).toBeTruthy();
  });
});
