import { initializeStore } from '../store';

describe('Test Redux Store', () => {
  it('should use cached store', () => {
    const store = initializeStore();
    expect(initializeStore()).toBe(store);
  })

  it('should use updated store if there is an update on preloaded state', () => {
    const store1 = initializeStore();
    const store2 = initializeStore({ app: { city: 'Jakarta' } });
    const store3 = initializeStore();

    expect(store2).not.toBe(store1);
    expect(store2).toBe(store3);
  })
});
