import { render } from '@testing-library/react';
import About from './About';

describe('Test About Page', () => {
  it('should render about me information', function () {
    const { queryByTitle } = render(
      <About />
    );

    expect(queryByTitle(/Linkedin/i)).toBeInTheDocument();
    expect(queryByTitle(/Github/i)).toBeInTheDocument();
    expect(queryByTitle(/Stack Overflow/i)).toBeInTheDocument();
  });
});
