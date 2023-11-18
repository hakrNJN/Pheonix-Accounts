import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Topbar from './Components/Global/TopBar';
import MyRoutes from './Routes/Routes';
import Sidebar from './Components/Global/Sidebar';
import React from 'react';
import appConfig from "./Config/AppConfig";
import { ColorModeContext,useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './Store/Store';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SignInPage from './Screens/Login/LoginPage';
import { setLoading } from './Store/Slice/AuthSlice';
import LoadingSpinner from "./Components/Global/LoadinfSpinner";
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });

const AuthorisedRoutes = () => {
  const [isSidebar, setIsSidebar] = React.useState(true);
  return (
    <BrowserRouter >
      <div className="app">
        <Sidebar menuContent={appConfig.menuContent} isSidebar={isSidebar} />
        <main className="content" style={{ flex: 1 }}>
              <Topbar setIsSidebar={setIsSidebar} />
              <MyRoutes />
            </main>
      </div>
    </BrowserRouter>
  );
}

const UnAuthorisedRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const loading = useSelector((state) => state.authentication.loading);

  React.useEffect(() => {
    const checkLoginStatus = async () => {
      const token = ls.get('token');
      const user = ls.get('user');
      dispatch(setLoading(false));
    };
    checkLoginStatus();
  }, [dispatch]);

  if (loading) {
    return <LoadingSpinner/>;
  }

  return (
    <div>
      {isLoggedIn ? <AuthorisedRoutes /> : <UnAuthorisedRoutes />}
    </div>
  );
};

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <AppContent />
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
