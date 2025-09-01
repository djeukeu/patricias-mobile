import { configureStore } from '@reduxjs/toolkit';

import categorySlice from './slices/category';

const store = configureStore({
  reducer: {
    category: categorySlice.reducer,
  },
});

export default store;
