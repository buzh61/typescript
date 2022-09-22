import Cart from '../src/ts/Cart/Cart';
import Movie from '../src/ts/Items/Movie';
import Book from '../src/ts/Items/Book'



test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding movie to cart', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers assemble',
  ['фантастика', 'боевик', 'фэнтэзи', 'приключения'], '137 мин. / 02:17',1000));
  expect(cart.items).toContainEqual({
    id: 1,
    name: 'Мстители',
    originalName: 'The Avengers',
    year: 2012,
    country: 'США',
    tagline: 'Avengers assemble',
    genre: ['фантастика', 'боевик', 'фэнтэзи', 'приключения'],
    duration: '137 мин. / 02:17',
    price: 1000,
  })
})

test('total price checking', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'Idiot', 'F. Dostoevsky', 1500, 650));
  cart.add(new Book(2, 'Revizor', 'N. Gogol', 1000, 500));
  expect(cart.totalPrice()).toBe(2500);
})

test('total discount price check', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'Idiot', 'F. Dostoevsky', 1500, 650));
  cart.add(new Book(2, 'Revizor', 'N. Gogol', 1000, 500));
  expect(cart.totalPriceWithDiscount(5)).toBe(2375);
})

test('delete item checking', () => {
  const cart = new Cart();
  cart.add(new Book(1, 'Idiot', 'F. Dostoevsky', 1500, 650));
  cart.add(new Book(2, 'Revizor', 'N. Gogol', 1000, 500));
  cart.delete(1);
  expect(cart.items.length).toBe(1);
})
