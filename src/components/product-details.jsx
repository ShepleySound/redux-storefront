import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Typography,
  Stack,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useGetProductByIdQuery } from '../features/api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Image } from 'mui-image';
import numeral from 'numeral';
import { addItem } from '../features/cart/cartSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.products[id] || 0);

  const product = useGetProductByIdQuery(id);
  return product.isLoading ? (
    <div>Loading...</div>
  ) : (
    <Container>
      <Grid container spacing={4}>
        <Grid xs={12} sm={6} md={4}>
          <Paper>
            <Image
              src='https://picsum.photos/400/400'
              shift='right'
              sx={{ borderRadius: 2 }}
            />
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={5}>
          <Typography variant='h2'>{product.data.name}</Typography>
          <Divider />
          <Typography variant='h5'>
            {numeral(product.data.price).format('$0,0.00')}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magnam
            delectus omnis sint excepturi consequuntur maiores. Odit tempora
            accusamus numquam molestiae, libero quis nesciunt nulla quia,
            perspiciatis omnis ab eveniet?
          </Typography>
        </Grid>
        <Grid xs={12} sm={6} md={3}>
          <Paper>
            <Stack>
              <Typography
                textAlign='center'
                variant='h6'
              >{`${product.data.inStock} in stock`}</Typography>
              <Button
                variant='contained'
                onClick={() => {
                  if (inCart < product.data.inStock) {
                    dispatch(addItem({ qty: 1, productId: product.data._id }));
                  }
                }}
              >
                Add to cart
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
