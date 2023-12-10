import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  name: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterName(state, action) {
      state.name = action.payload.toLowerCase();
    },
  },
});

export const { changeFilterName } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
