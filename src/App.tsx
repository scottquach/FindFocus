import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import { Grid } from './components/Grid/Grid';
import { MenuBar } from './components/MenuBar';
import { UtilityBar } from './components/UtilityBar';
import useLoadApp from './hooks/useLoadApp';
import { Background } from './components/Background';
import BrandLogo from './components/BrandLogo';
import OnBoarding from './components/OnBoarding';
// import { themeOptions } from './styles/MuiThemeOptions';
import { ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './styles/MuiThemeOptions';
import { Toaster } from 'react-hot-toast';


import { createTheme } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { themeState } from './stores/store';
import { useEffect, useState } from 'react';
import { isHexLight } from './models/theme.model';
function App() {
  useLoadApp();

  const [muiTheme, setMuiTheme] = useState<any>(themeOptions);
  const [theme] = useRecoilState(themeState);

  useEffect(() => {
    console.log("THEME", theme);
    if (isHexLight(theme.background)) {
      setMuiTheme(createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: theme.primary.trim()
          }
        }
      }))
    } else {
      setMuiTheme(createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: theme.primary.trim()
          }
        }
      }))
    }
  }, [theme]);

  console.log('APP REBUILT');

  return (
    <div className="App">
      <ThemeProvider theme={muiTheme}>
        <Toaster />
        <BrandLogo></BrandLogo>
        <Grid></Grid>
        <UtilityBar></UtilityBar>
        <MenuBar></MenuBar>
        <Background></Background>
        {/* <OnBoarding></OnBoarding> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
