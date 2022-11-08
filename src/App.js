import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header';
import { selectActive } from './features/categories/categorySlice';
import CategoryBar from './components/category-bar';
import ProductList from './components/product-list';

function App() {
  const activeCategory = useSelector(selectActive);
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <CategoryBar />
      <ProductList />
    </>
  );
}

export default App;
