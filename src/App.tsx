import './App.scss';

import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component, Dispatch } from 'react';
import { CurrentUser } from './models/user-interfaces';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { IReducedState, IStateAction } from './models/state-interfaces';

interface IProps {
    updateUserState?: (user?: CurrentUser) => void;
    currentUser?: CurrentUser;
}
class App extends Component<IProps, never> {
    private unsubscribeFromAuth: (() => void) | undefined;
    unsubscribeFromSnapshot: (() => void) | undefined;

    componentDidMount(): void {
        const { updateUserState } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                this.unsubscribeFromSnapshot = userRef?.onSnapshot(snapshot => {
                    updateUserState?.({                        
                        id: snapshot.id,
                        ...snapshot.data() as any                        
                    });
                });
            } else {
                updateUserState?.();
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
                    <Route 
                        exact 
                        path='/signin' 
                        render={() => 
                            this.props.currentUser ? (<
                                Redirect to='/' /> 
                            ) : ( 
                                <SignInUpPage />
                            )
                        } 
                    />
                </Switch>
            </div>
        );
    }
}

export const mapStateToProps = (state: IReducedState): IProps => ({
    currentUser: state.userState?.currentUser
});

const mapDispatchToProps = (dispatch: Dispatch<IStateAction>): IProps => ({
    updateUserState: (user?: CurrentUser) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
