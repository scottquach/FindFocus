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

function App() {

  useLoadApp();


  console.log('APP REBUILT');

  return (
    <div className="App">
      <BrandLogo></BrandLogo>
      <Grid></Grid>
      <UtilityBar></UtilityBar>
      <MenuBar></MenuBar>
      <Background></Background>
      {/* <OnBoarding></OnBoarding> */}
    </div>
  );
}

export default App;
