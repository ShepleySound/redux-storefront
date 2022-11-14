import { useSelector } from 'react-redux';
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
import CategoryBar from './category-bar';

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const itemCount = useSelector(selectCount);

  return (
    <>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }} noWrap={true}>
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
        <CategoryBar />
      </AppBar>
      <Toolbar />
      <Toolbar sx={{ marginBottom: 2 }} />

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
