import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Tooltip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';
import { useGetProductByIdQuery } from '../features/api/apiSlice';

function CartItem({ productId, qty }) {
  const productDetails = useGetProductByIdQuery(productId);
  const dispatch = useDispatch();

  return productDetails.isLoading ? (
    <div>loading...</div>
  ) : (
    <ListItem
      secondaryAction={
        <Tooltip title='Delete'>
          <IconButton
            edge='end'
            aria-label='delete'
            onClick={() => dispatch(removeItem({ productId: productId }))}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      }
    >
      <ListItemText
        primary={productDetails.data.name}
        secondary={`Quantity: ${qty}`}
      />
    </ListItem>
  );
}
export default function CartList() {
  const products = useSelector((state) => state.cart.products);

  return Object.keys(products).length === 0 ? (
    <Container>
      <Typography py={3}>Your cart is empty</Typography>
    </Container>
  ) : (
    <List>
      {Object.entries(products).map(([id, qty]) => (
        <CartItem key={id} productId={id} qty={qty} />
      ))}
    </List>
  );
}
