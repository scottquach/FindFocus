import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import { Grid } from './components/Grid';
import { MenuBar } from './components/MenuBar';
import { UtilityBar } from './components/UtilityBar';
import useLoadApp from './hooks/useLoadApp';
import { Background } from './components/Background';

function App() {

  useLoadApp();

  return (
    <div className="App">
      <Grid></Grid>
      <UtilityBar></UtilityBar>
      <MenuBar></MenuBar>
      <Background></Background>
    </div>
  );
}

export default App;
