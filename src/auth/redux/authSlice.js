import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import request from '../../util/request';

// Initial state
const initialState = {
  user: null,
  error: null,
  status: 'idle',
};

// Async actions

export const login = createAsyncThunk('auth/login', async data => {
  const response = await request({
    url: '/auth/login',
    method: 'POST',
    data,
  });

  await AsyncStorage.setItem('@auth/token', response.token);

  return response.user;
});

export const register = createAsyncThunk('auth/register', async data => {
  const response = await request({
    url: '/auth/register',
    method: 'POST',
    data,
  });

  await AsyncStorage.setItem('@auth/token', response.token);

  return response.user;
});

export const logout = createAsyncThunk('auth/logout', async data => {
  await request({
    url: '/auth/logout',
    method: 'POST',
    data,
  });

  await AsyncStorage.removeItem('@auth/token');
});

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Login
      .addCase(login.pending, state => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Register
      .addCase(register.pending, state => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Logout
      .addCase(logout.pending, state => {
        state.error = null;
        state.status = 'loading';
      })
      .addCase(logout.fulfilled, state => {
        state.status = 'succeeded';
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Actions
export const {} = authSlice.actions;

// Reducer
export default authSlice.reducer;

// Selectors

export const selectUser = state => state.auth.user;

export const selectError = state => state.auth.error;

export const selectStatus = state => state.auth.status;
