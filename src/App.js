import React from 'react';
import './App.css';
import './Ustyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Add from './Add';
import Home from './Home'; 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/Add" exact component = {Add} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
