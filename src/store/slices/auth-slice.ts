import { createSlice } from '@reduxjs/toolkit';
import { type User } from '@/types';

interface AuthSliceType {
  user: User | null;
  token: string | null;
  isAuth: boolean;
}

const initialState: AuthSliceType = {
  user: null,
  token: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuth = true;
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuth = false;
    },

    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
    },
  },
});

export const { setAuth, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
