import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>  {/*STOP MATCHING AFTER FIRST HIT*/}
        <Route exact path='/' component={HomePage} /> {/*without exact, partial matches cause component to render */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
