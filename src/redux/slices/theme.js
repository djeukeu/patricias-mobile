import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: '',
  },
  reducers: {
    setTheme: (_state, action) => {
      return { theme: action.payload };
    },
    onChangeTheme: (_state, action) => {
      return { theme: action.payload };
    },
  },
});

export const { onChangeTheme, setTheme } = themeSlice.actions;

export default themeSlice;
