import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';
import { Component } from 'react';

interface IProp {

}

interface IState {
  currentUser: any
}
class App extends Component<IProp, IState> {
  private unsubscribeFromAuth: any;

  constructor(props: IProp) {
    super(props);
    
    this.state = {
      currentUser: null
    }
  }
   
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>  {/*STOP MATCHING AFTER FIRST HIT*/}
          <Route exact path='/' component={HomePage} /> {/*without exact, partial matches cause component to render */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInUpPage} />
        </Switch>
      </div>
    )
  };
}

export default App;
