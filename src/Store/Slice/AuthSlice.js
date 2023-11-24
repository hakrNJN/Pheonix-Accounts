import { createSlice } from '@reduxjs/toolkit';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

const initialState = {
    isLoggedIn: false,
    loading: true,
    token: ls.get('token') || null,
    userName: ls.get('userName') || null,
    passWord: ls.get('passWord') || null,
    firstName: ls.get('firstName') || null,
    clientLogo: ls.get('clientLogo') || null,
    lastUpload: ls.get('lastUpload') || null,
    companyId: ls.get('companyId') || null,
    fromDate: ls.get('fromDate') || null,
    uptoDate: ls.get('uptoDate') || null,
    url: ls.get('url') || null,
    clientId: ls.get('clientId') || null,
    roleName: ls.get('roleName') || null,
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
        setUserName(state, action) {
            state.userName = action.payload;
            ls.set('userName', action.payload);
        },
        setPassWord(state, action) {
            state.passWord = action.payload;
            ls.set('passWord', action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setFirstName: (state, action) => {
            state.firstName = action.payload;
            ls.set('firstName',action.payload)
          },
         setClientLogo: (state, action) => {
            state.clientLogo = action.payload;
            ls.set('clientLogo',action.payload)
          },
          setLastUpload: (state, action) => {
            state.lastUpload = action.payload;
            ls.set('lastUpload',action.payload)
          },
          setCompanyId: (state, action) => {
            state.companyId = action.payload;
            ls.set('companyId',action.payload)
          },
          setFromDate: (state, action) => {
            state.fromDate = action.payload;
            ls.set('fromDate',action.payload)
          },
          setUptoDate: (state, action) => {
            state.uptoDate = action.payload;
            ls.set('uptoDate',action.payload)
          },
          setUrl: (state, action) => {
            state.url = action.payload;
            ls.set('url',action.payload)
          },
          setClientId: (state, action) => {
            state.clientId = action.payload;
            ls.set('clientId',action.payload)
          },
          setRoleName: (state, action) => {
            state.roleName = action.payload;
            ls.set('roleName',action.payload)
          },
    },
});

export const { setToken, setUser, logout, setUserName, setPassWord, setLoading, setFirstName,
    setClientLogo, setLastUpload, setCompanyId, setFromDate, setUptoDate, setUrl, setClientId, setRoleName } = authSlice.actions;

export default authSlice.reducer;