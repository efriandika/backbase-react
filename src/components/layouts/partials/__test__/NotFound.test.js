import { render } from '@testing-library/react';
import { NotFound } from '../NotFound';
import { MemoryRouter } from 'react-router-dom'

describe('Test Default Not Found Page', () => {
  it('should render about me information', function () {
    const { queryByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(queryByText(/The page you are looking for is not found/i)).toBeInTheDocument();
  });
});
