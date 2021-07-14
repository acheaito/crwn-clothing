import './App.scss';

import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { CurrentUser } from './models/user-interfaces';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

interface IProps {
    setCurrentUser: (user: CurrentUser | null) => void;
}
class App extends Component<IProps, never> {
    private unsubscribeFromAuth: (() => void) | undefined;
    unsubscribeFromSnapshot: (() => void) | undefined;

    componentDidMount(): void {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                this.unsubscribeFromSnapshot = userRef?.onSnapshot(snapshot => {
                    setCurrentUser({                        
                        id: snapshot.id,
                        ...snapshot.data() as any                        
                    });
                });
            } else {
                setCurrentUser(null);
            }                       
        });
    }

    componentWillUnmount(): void {
        this.unsubscribeFromAuth?.();
        this.unsubscribeFromSnapshot?.();
    }

    render(): JSX.Element {
        return (
            <div>
                <Header/>
                <Switch>  {/* STOP MATCHING AFTER FIRST HIT */}
                    <Route exact path='/' component={HomePage} /> {/* without exact, partial matches cause component to render */}
                    <Route path='/shop' component={ShopPage} />
                    <Route path='/signin' component={SignInUpPage} />
                </Switch>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentUser: (user: CurrentUser | null) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
