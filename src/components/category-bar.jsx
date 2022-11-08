import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActive,
  selectCategoryNames,
  switchCategory,
} from '../features/categories/categorySlice';

export default function CategoryBar() {
  const activeCategory = useSelector(selectActive);
  const categoryNames = useSelector(selectCategoryNames);
  const dispatch = useDispatch();
  return (
    <>
      <Toolbar>
        <ButtonGroup>
          {categoryNames.map((category) => {
            return (
              <Button
                variant={
                  activeCategory.normalized === category
                    ? 'contained'
                    : 'outlined'
                }
                onClick={() => dispatch(switchCategory(category))}
              >
                {category}
              </Button>
            );
          })}
        </ButtonGroup>
      </Toolbar>
    </>
  );
}
