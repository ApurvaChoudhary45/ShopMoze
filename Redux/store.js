import { configureStore } from '@reduxjs/toolkit';
import { fetchUpdater } from './Fetch/fetch.js';
import { AddFavoriteRed } from './AddFav/AddFav.js';
import { itemReducer } from './cartItems/updateCart.js';
import {  switchMode } from './DarkMode/darkMode.js';
export const store = configureStore({
  reducer: {
    fetch: fetchUpdater,
    favroite : AddFavoriteRed,
    counter: itemReducer,
    darkMode : switchMode
  },
});
