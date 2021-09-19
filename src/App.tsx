import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import { Grid } from './components/Grid';
import { TaskBar } from './components/TaskBar';

function App() {
  return (
    <div className="App">
      <Grid></Grid>
      <TaskBar></TaskBar>
     
    </div>
  );
}

export default App;
