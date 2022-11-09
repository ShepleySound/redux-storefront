import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { selectProductsByCategory } from '../features/products/productSlice';
import ProductCard from './product-card';

export default function ProductList() {
  const productsByCategory = useSelector(selectProductsByCategory);

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {productsByCategory.map((product) => (
          <Grid xs={2} sm={4} md={4} key={product.id}>
            <ProductCard key={product.id} id={product.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
