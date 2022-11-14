import Header from './components/header';
import ProductList from './components/product-list';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProductDetails from './components/product-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <ProductList />,
      },
      {
        path: '/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
