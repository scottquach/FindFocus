import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import { Grid } from './components/Grid';
import { MenuBar } from './components/MenuBar';
import { UtilityBar } from './components/UtilityBar';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Grid></Grid>
        <UtilityBar></UtilityBar>
        <MenuBar></MenuBar>

      </div>
    </RecoilRoot>
  );
}

export default App;
