import { Button, ButtonGroup, Toolbar, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveCategory,
  switchCategory,
} from '../features/filtering/filteringSlice';
import { Link } from 'react-router-dom';

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
              <Tooltip key={category._id} title={category.description}>
                <Button
                  component={Link}
                  to={'/products'}
                  key={category._id}
                  variant={
                    activeCategory === category.name ? 'contained' : 'text'
                  }
                  onClick={() => dispatch(switchCategory(category.name))}
                >
                  {category.name}
                </Button>
              </Tooltip>
            ))
          )}
        </ButtonGroup>
      </Toolbar>
    </>
  );
}
