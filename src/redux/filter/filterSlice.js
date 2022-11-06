import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilterValue(state, action) {
      return (state = action.payload.filterValue);
    },
  },
});

export const filterReducer = filterSlice.reducer;
