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
import { createTheme, ThemeProvider } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: "#616161"
    },
    secondary: {
      main: "#616161"
    }
  }
});

function App() {
  useLoadApp();

  console.log('APP REBUILT');

  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
        <BrandLogo></BrandLogo>
        <Grid></Grid>
        <UtilityBar></UtilityBar>
        <MenuBar></MenuBar>
        <Background></Background>
        {/* <OnBoarding></OnBoarding> */}
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
