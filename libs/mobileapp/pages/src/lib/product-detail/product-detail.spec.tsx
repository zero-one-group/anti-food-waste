import { render } from '@testing-library/react';

import ProductDetail from './product-detail';

describe('ProductDetail', () => {
  it('should render successfully', () => {
    render(<ProductDetail />);
  });
});
