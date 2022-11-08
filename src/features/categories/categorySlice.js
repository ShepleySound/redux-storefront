import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    options: {
      electronics: {
        normalized: 'electronics',
        displayName: 'Electronics',
        description: 'Enter description here',
      },
      skincare: {
        normalized: 'skincare',
        displayName: 'Skin Care',
        description: 'Enter description here',
      },
      health: {
        normalized: 'health',
        displayName: 'Health & Household',
        description: 'Enter description here',
      },
      kitchen: {
        normalized: 'kitchen',
        displayName: 'Kitchen',
        description: 'Enter description here',
      },
    },
    activeCategory: 'electronics',
  },
  reducers: {
    switchCategory: (state, action) => {
      if (state.options[action.payload]) {
        state.activeCategory = state.options[action.payload].normalized;
      }
    },
  },
});

const { actions, reducer } = categorySlice;

export const { switchCategory } = actions;

export const selectActive = (state) =>
  state.categories.options[state.categories.activeCategory];
export const selectCategoryNames = (state) =>
  Object.keys(state.categories.options);
export default reducer;
