import { useSelector, useDispatch } from 'react-redux';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectCount, increment } from '../features/cart/cartSlice';

export default function Header() {
  const itemCount = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant='h4' sx={{ flexGrow: 1 }}>
            Redux Storefront
          </Typography>
          <IconButton aria-label='cart'>
            <Badge badgeContent={itemCount} color='info'>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
