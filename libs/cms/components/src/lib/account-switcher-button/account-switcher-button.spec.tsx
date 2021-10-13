import { render } from '@testing-library/react';

import AccountSwitcherButton from './account-switcher-button';

describe('AccountSwitcherButton', () => {
  it('should render successfully', () => {
    expect(<AccountSwitcherButton />).toBeTruthy();
  });
});
