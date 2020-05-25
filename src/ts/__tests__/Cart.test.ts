import { cart } from '../app';

test('How many?', () => {

  expect(cart.items.length).toBeGreaterThan(2);
});
