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
import { Provider } from 'react-redux';
const AppContent = () => {
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


const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <Provider store={store}>*/}
          <AppContent />
        {/*</Provider>*/} 
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
