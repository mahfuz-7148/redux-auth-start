import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  currentUser: undefined,
  isLoading: false
}
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const res = await axios.post('https://api.realworld.io/api/users', {
      user: userData
    })
    return res.data.user
  }
  catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors)
  }
})
export const login = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const res = await axios.post('https://api.realworld.io/api/users/login', {
      user: userData
    })
    return res.data.user
  }
  catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors)
  }
})
export const getCurrentUser = createAsyncThunk('auth/getCurrentUser', async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem('accessToken')
    const res = await axios.get('https://api.realworld.io/api/user', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    return res.data.user
  }
  catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.errors)
  }
})


const authSlice = createSlice({
  name: 'auth',
  initialState
})