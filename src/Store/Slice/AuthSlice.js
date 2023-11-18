import { createSlice } from '@reduxjs/toolkit';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

const initialState = {
    isLoggedIn: false,
    loading: true,
    token: ls.get('token') || null,
    userName: ls.get('userName') || null,
    passWord: ls.get('passWord') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            ls.set('token', action.payload);
        },
        setUser: (state, action) => {
            state.user = action.payload;
            ls.set('user', action.payload);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
            // state.loading = true;
            ls.remove('token');
            ls.remove('user');
            ls.remove('password');
        },
        SetUserName(state, action) {
            state.userName = action.payload;
            ls.set('userName', action.payload);
        },
        SetPassWord(state, action) {
            state.passWord = action.payload;
            ls.set('passWord', action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
    },
});

export const { setToken, setUser, logout, SetUserName, SetPassWord,setLoading } = authSlice.actions;

export default authSlice.reducer;