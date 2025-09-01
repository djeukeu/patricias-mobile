import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
  },
  reducers: {
    getCategories: (state, action) => {
      const categories = _.map(action.payload, (category) => {
        return {
          id: category.id,
          name: category.name,
          slug: category.slug,
        };
      });
      return { categories };
    },
  },
});

export const { getCategories } = categorySlice.actions;

export default categorySlice;
