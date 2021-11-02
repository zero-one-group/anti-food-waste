import { render } from '@testing-library/react';

import SignupFormPersonal from './signup-form-personal';

describe('SignupFormPersonal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignupFormPersonal />);
    expect(baseElement).toBeTruthy();
  });
});
