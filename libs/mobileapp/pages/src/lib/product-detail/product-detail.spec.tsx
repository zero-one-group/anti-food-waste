import { render } from '@testing-library/react';
import { Route, MemoryRouter } from 'react-router-dom';
import ProductDetail from './product-detail';

describe('ProductDetail', () => {
  it('should render successfully', () => {
    render(
      <MemoryRouter initialEntries={['/product-detail/1']}>
        <Route path="/product-detail/:id">
          <ProductDetail />
        </Route>
      </MemoryRouter>
    );
  });
});
