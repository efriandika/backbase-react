import { updateObject } from '../utilities';

describe('Test Redux Utility Function', () => {
  it('object should be merged', () => {
    const oldObject = {
      firstName: 'Efriandika',
    };

    const newObject = {
      firstName: 'Efriandika',
      lastName: 'Pratama',
    };

    expect(updateObject(oldObject, newObject)).not.toEqual(oldObject)

    expect(updateObject(oldObject, newObject)).toEqual({
      firstName: 'Efriandika',
      lastName: 'Pratama',
    })
  });
});
