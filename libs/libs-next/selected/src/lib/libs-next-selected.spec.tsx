import { render } from '@testing-library/react';

import LibsNextSelected from './libs-next-selected';

describe('LibsNextSelected', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsNextSelected />);
    expect(baseElement).toBeTruthy();
  });
});
