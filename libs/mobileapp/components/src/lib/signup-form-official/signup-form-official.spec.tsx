import { render } from '@testing-library/react';

import SignupFormOfficial from './signup-form-official';

describe('SignupFormOfficial', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupFormOfficial />);
    expect(baseElement).toBeTruthy();
  });
});
