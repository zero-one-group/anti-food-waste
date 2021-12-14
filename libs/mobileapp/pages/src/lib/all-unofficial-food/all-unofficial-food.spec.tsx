import { render } from '@testing-library/react';

import AllUnofficialFood from './all-unofficial-food';

describe('AllUnofficialFood', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllUnofficialFood />);
    expect(baseElement).toBeTruthy();
  });
});
