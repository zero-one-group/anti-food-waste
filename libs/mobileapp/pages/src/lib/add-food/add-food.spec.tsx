import { render } from '@testing-library/react';

import AddFood from './add-food';

describe('AddFood', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddFood />);
    expect(baseElement).toBeTruthy();
  });
});
