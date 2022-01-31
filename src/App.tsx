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
import { themePaletteState } from './stores/store';
import { useEffect, useState } from 'react';
import { isHexLight, themePaletteToMuiTheme } from './models/theme.model';
function App() {
  useLoadApp();

  const [muiTheme, setMuiTheme] = useState<any>(themeOptions);
  const [themePalette] = useRecoilState(themePaletteState);

  useEffect(() => {
    console.log("THEME", themePalette);
    let newMuiTheme = themePaletteToMuiTheme(themePalette);
    setMuiTheme(newMuiTheme);
  }, [themePalette]);

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
