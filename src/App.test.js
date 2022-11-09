import { screen } from '@testing-library/react';
import renderWithProvider from './utils/test-utils';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Renders application', () => {
  renderWithProvider(<App />);

  // Application title in the header
  expect(screen.getByText(/redux storefront/i)).toBeInTheDocument();
  // Cart button in the header
  expect(screen.getByRole(/button/i, { name: /^cart$/i })).toBeInTheDocument();

  // Category Row
  expect(
    screen.getByRole(/button/i, { name: /^electronics$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole(/button/i, { name: /^health$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole(/button/i, { name: /^kitchen$/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole(/button/i, { name: /^clothing$/i })
  ).toBeInTheDocument();

  // Initial items in the default category.
  expect(screen.getByRole(/heading/i, { name: /laptop/i })).toBeInTheDocument();
  expect(screen.getByText(/gamecube/i)).toBeInTheDocument();
  expect(screen.getByText(/polaroid camera/i)).toBeInTheDocument();
  expect(screen.getByText(/very cool watch/i)).toBeInTheDocument();
});

test('Clicking add to cart button changes cart count preview', () => {
  renderWithProvider(<App />);

  const addToCart = screen.getAllByRole(/button/i, { name: /add to cart/i });
  userEvent.click(addToCart[0]);
  expect(screen.getByText('1')).toBeInTheDocument();
  userEvent.click(addToCart[0]);
  userEvent.click(addToCart[0]);
  userEvent.click(addToCart[0]);
  expect(screen.getByText('4')).toBeInTheDocument();
});

test('Cart preview can be accessed by clicking the cart button', () => {
  renderWithProvider(<App />);

  const cartButton = screen.getByRole(/button/i, { name: /^cart$/i });

  const addToCart = screen.getAllByRole(/button/i, { name: /add to cart/i });
  userEvent.click(addToCart[0]);
  userEvent.click(addToCart[1]);

  userEvent.click(cartButton);

  const cartList = screen.getByRole(/^list$/i);
  expect(cartList).toBeInTheDocument();
  expect(screen.getAllByRole(/listitem/i)[0]).toHaveTextContent(/laptop/i);
  expect(screen.getAllByRole(/listitem/i)[1]).toHaveTextContent(/gamecube/i);
});
