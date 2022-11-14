import Header from './components/header';
import CategoryBar from './components/category-bar';
import ProductList from './components/product-list';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ProductDetails from './components/product-details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'products/',
        element: <ProductList />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
    ],
  },
]);

function Root() {
  return (
    <>
      <Header />
      {/* <CategoryBar /> */}
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
