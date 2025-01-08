// import { createSlice } from "@reduxjs/toolkit";


// const initialState = { darkMode: false };

// const reducers = {
//   toggleDarkMode: (state) => {
//     state.darkMode = !state.darkMode;
//   },
// };

// const darkModeSlice = createSlice({ name: "darkMode", initialState, reducers });

// export const { toggleDarkMode } = darkModeSlice.actions;

// export default darkModeSlice.reducer;




// src/store/darkModeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: { darkMode: false },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
