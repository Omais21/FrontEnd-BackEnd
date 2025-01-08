// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from './darkModeSlice';

const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
});

export default store;
