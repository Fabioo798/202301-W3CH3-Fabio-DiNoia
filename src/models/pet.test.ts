import { Pet } from './pet';

describe('Given the class pet ', () => {
  describe('When we create a new pet ', () => {
    test('Then if the properties are ("Fido", "Ovejero", "Fabio"), it should create an object with 5 properties', () => {
      const pet1 = new Pet('Fido', 'Ovejero', 'Fabio');

      expect(pet1).toHaveProperty('name');
      expect(pet1).toHaveProperty('species');
      expect(pet1).toHaveProperty('owner');
      expect(pet1).toHaveProperty('isAdopted');
      expect(pet1).toHaveProperty('id');
    });
  });
});
