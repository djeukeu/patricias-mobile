/* eslint-disable no-console */
import { api } from '../api';
import { getCategories } from '../slices/category';

export const getCategoriesAction = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('products/categories');
      const data = response.data;
      dispatch(getCategories(data));
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
