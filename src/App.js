import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>  {/*STOP MATCHING AFTER FIRST HIT*/}
        <Route exact path='/' component={HomePage} /> {/*without exact, partial matches cause component to render */}
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
