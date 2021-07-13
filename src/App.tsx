import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { CurrentUser } from './models/user-interfaces';

interface IState {
  currentUser?: CurrentUser;
}
class App extends Component<Record<string, never>, IState> {
    private unsubscribeFromAuth: () => void = () => {
        // do nothing
    };
    
    constructor(props: Record<string, never>) {
        super(props);

        this.state = {            
        };
    }

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef?.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data() as any
                        }
                    });
                });
            }            
            this.setState({ currentUser: undefined });
        });
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth();
    }

    render(): JSX.Element {
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
