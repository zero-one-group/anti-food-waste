import { render } from '@testing-library/react';

import AccountSwitcher from './account-switcher';

describe('AccountSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountSwitcher />);
    expect(baseElement).toBeTruthy();
  });
});
