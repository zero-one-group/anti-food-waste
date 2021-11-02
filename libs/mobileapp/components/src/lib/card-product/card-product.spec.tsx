import { render } from '@testing-library/react';

import CardProduct from './card-product';

describe('CardProduct', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardProduct />);
    expect(baseElement).toBeTruthy();
  });
});
