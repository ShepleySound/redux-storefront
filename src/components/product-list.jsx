import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { useGetProductByCategoryQuery } from '../features/api/apiSlice';
import { selectActiveCategory } from '../features/filtering/filteringSlice';
import ProductCard from './product-card';

export default function ProductList() {
  const activeCategory = useSelector(selectActiveCategory);
  const products = useGetProductByCategoryQuery(activeCategory);

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products.isLoading ? (
          <div>Loading...</div>
        ) : (
          products.data.results.map((product) => (
            <Grid xs={2} sm={4} md={4} key={product._id}>
              <ProductCard key={product._id} product={product} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
}
