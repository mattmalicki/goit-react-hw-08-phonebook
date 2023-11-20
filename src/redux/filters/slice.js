import { createSlice } from '@reduxjs/toolkit';
import { statusFavFilter } from './constants';

const filterInitialState = {
  name: '',
  fav: statusFavFilter.all,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload;
    },
    changeFavFilter(state, action) {
      state.fav = action.payload;
    },
  },
});

export const { changeFavFilter, changeFilterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
