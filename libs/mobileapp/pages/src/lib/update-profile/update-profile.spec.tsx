import { render } from '@testing-library/react';

import UpdateProfile from './update-profile';

describe('UpdateProfile', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UpdateProfile />);
    expect(baseElement).toBeTruthy();
  });
});
