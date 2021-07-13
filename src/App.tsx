import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
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
      };
  }

  componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
          if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);

              userRef?.onSnapshot(snapshot => {
                  this.setState({
                      currentUser: {
                          id: snapshot.id,
                          ...snapshot.data()
                      }
                  });
              });
          }
          this.setState({ currentUser: userAuth });
      });
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  render() {
      return (
          <div>
              <Header currentUser={this.state.currentUser} />
              <Switch>  {/* STOP MATCHING AFTER FIRST HIT */}
                  <Route exact path='/' component={HomePage} /> {/* without exact, partial matches cause component to render */}
                  <Route path='/shop' component={ShopPage} />
                  <Route path='/signin' component={SignInUpPage} />
              </Switch>
          </div>
      );
  }
}

export default App;
