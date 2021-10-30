import { render } from '@testing-library/react';

import MobileappComponents from './mobileapp-components';

describe('MobileappComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MobileappComponents />);
    expect(baseElement).toBeTruthy();
  });
});
