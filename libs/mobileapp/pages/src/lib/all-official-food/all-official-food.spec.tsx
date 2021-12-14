import { render } from '@testing-library/react';

import AllOfficialFood from './all-official-food';

describe('AllOfficialFood', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllOfficialFood />);
    expect(baseElement).toBeTruthy();
  });
});
