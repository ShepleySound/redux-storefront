import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Badge,
  Button,
  Drawer,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectCount } from '../features/cart/cartSlice';
import { useState } from 'react';
import CartList from './cart-list';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const itemCount = useSelector(selectCount);
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>
            Redux Storefront
          </Typography>
          <Tooltip title='Cart'>
            <Badge badgeContent={itemCount} color='info'>
              <Button
                aria-label='cart'
                endIcon={<ShoppingCartOutlinedIcon />}
                onClick={() => setDrawerOpen(true)}
              >
                Cart
              </Button>
            </Badge>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer
        anchor={'right'}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <CartList />
      </Drawer>
    </>
  );
}
