import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export default function ProductCard({ id }) {
  const product = useSelector((state) => state.products[id]);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
    >
      <CardMedia component='img' height='140' image={product.imageURL} />
      <CardContent>
        <Typography variant='h5'>{product.name}</Typography>
        <Typography>{product.description}</Typography>
        <Typography>{`$ ${product.price}`}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => dispatch(addItem({ qty: 1, productId: id }))}>
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
