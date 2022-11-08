import {
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export default function ProductCard({ id }) {
  const product = useSelector((state) => state.products[id]);
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        maxWidth: 400,
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1452&q=80'
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
    </Card>
  );
}
