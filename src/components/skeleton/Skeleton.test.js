import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

const SampleWrapper = ({ children }) => (<div data-testid="test-sample-wrapper">{children}</div>)

describe('Test Skeleton', () => {
  it('should render a skeleton', async () => {
    const { findAllByTestId } = render(<Skeleton />);
    const skeletonElements = await findAllByTestId('skeleton-element');

    expect(skeletonElements.length).toBe(1);
  });

  it('should render the required number of the skeleton', async () => {
    const { findAllByTestId } = render(<Skeleton count={4} />);
    const skeletonElements = await findAllByTestId('skeleton-element');

    expect(skeletonElements.length).toBe(4);
  });

  it('should render a skeleton with styles', async () => {
    const style = { borderRadius: 10, height: 50, width: 50 };

    const { findByTestId } = render(<Skeleton style={style} />)
    const skeletonElement = await findByTestId('skeleton-element');

    expect(skeletonElement).toHaveAttribute('style', 'border-radius: 10px; height: 50px; width: 50px;');
  });

  it('should render a circle skeleton', async () => {
    const { findByTestId } = render(<Skeleton height={50} width={50} circle />)
    const skeletonElement = await findByTestId('skeleton-element');

    expect(skeletonElement).toHaveAttribute('style', 'width: 50px; height: 50px; border-radius: 50%;');
  });

  it('inline style prop should overwrite custom styles', async () => {
    const style = { borderRadius: 10, height: 50, width: 50 };

    const { findByTestId } = render(<Skeleton height={100} style={style} />);
    const skeletonElement = await findByTestId('skeleton-element');

    expect(skeletonElement).toHaveAttribute('style', 'border-radius: 10px; height: 100px; width: 50px;');
  });

  it('should render custom className if provided', async () => {
    const { findAllByTestId } = render(<Skeleton count={4} className='test-class' />);
    const skeletonElements = await findAllByTestId('skeleton-element');

    expect(skeletonElements[0]).toHaveClass('test-class');
  });

  it('should use wrapper', async () => {
    const { findAllByTestId } = render(<Skeleton wrapper={SampleWrapper} />);
    const skeletonElements = await findAllByTestId('skeleton-element');

    expect(skeletonElements[0]).toBeInTheDocument();
  });
});
