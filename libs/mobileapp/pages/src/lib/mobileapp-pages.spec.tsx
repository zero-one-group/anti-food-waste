import { render } from '@testing-library/react';

import MobileappPages from './mobileapp-pages';

describe('MobileappPages', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileappPages />);
    expect(baseElement).toBeTruthy();
  });
});
