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
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.cart.products[product._id] || 0);

  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
    >
      {/* <CardMedia component='img' height='140' image={product.imageURL} /> */}
      <CardContent>
        <Typography variant='h5'>{product.name}</Typography>
        <Typography>{`Stock: ${product.inStock}`}</Typography>
        <Typography>{numeral(product.price).format('$0,0.00')}</Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            if (inCart < product.inStock) {
              dispatch(addItem({ qty: 1, productId: product._id }));
            }
          }}
        >
          add to cart
        </Button>
        <Button component={Link} to={`/products/${product._id}`}>
          view details
        </Button>
      </CardActions>
    </Card>
  );
}
