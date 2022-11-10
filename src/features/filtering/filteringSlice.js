import { createSlice } from '@reduxjs/toolkit';

export const filteringSlice = createSlice({
  name: 'filtering',
  initialState: {
    // options: {
    //   electronics: {
    //     normalized: 'electronics',
    //     displayName: 'Electronics',
    //     description: 'Enter description here',
    //   },
    //   health: {
    //     normalized: 'health',
    //     displayName: 'Health & Beauty',
    //     description: 'Enter description here',
    //   },
    //   kitchen: {
    //     normalized: 'kitchen',
    //     displayName: 'Kitchen',
    //     description: 'Enter description here',
    //   },
    //   clothing: {
    //     normalized: 'clothing',
    //     displayName: 'Clothing',
    //     description: 'Enter description here',
    //   },
    // },
    activeCategory: 'electronics',
  },
  reducers: {
    switchCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

const { actions, reducer } = filteringSlice;

export const { switchCategory } = actions;

export const selectActiveCategory = (state) => state.filtering.activeCategory;

export default reducer;
