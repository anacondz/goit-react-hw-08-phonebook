import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isPending: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isPending = false;
      state.error = null;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isPending = false;
      state.error = null;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [registerUser.pending](state) {
      state.isPending = true;
    },
    [logIn.pending](state) {
      state.isPending = true;
    },
    [logOut.pending](state) {
      state.isPending = true;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [registerUser.rejected](state, action) {
      state.isPending = false;
      state.error = action.payload;
    },
    [logIn.rejected](state, action) {
      state.isPending = false;
      state.error = action.payload;
    },
    [logOut.rejected](state, action) {
      state.isPending = false;
      state.error = action.payload;
    },
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
