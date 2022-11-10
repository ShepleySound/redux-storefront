import { Button, ButtonGroup, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveCategory,
  switchCategory,
} from '../features/filtering/filteringSlice';

import { useGetCategoriesQuery } from '../features/api/apiSlice';

export default function CategoryBar() {
  const activeCategory = useSelector(selectActiveCategory);
  const categories = useGetCategoriesQuery();

  const dispatch = useDispatch();
  return (
    <>
      <Toolbar>
        <ButtonGroup>
          {categories.isLoading ? (
            <div>loading...</div>
          ) : (
            categories.data.results.map((category) => (
              <Button
                key={category._id}
                variant={
                  activeCategory === category.name ? 'contained' : 'outlined'
                }
                onClick={() => dispatch(switchCategory(category.name))}
              >
                {category.name}
              </Button>
            ))
          )}
        </ButtonGroup>
      </Toolbar>
    </>
  );
}
