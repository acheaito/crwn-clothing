import './header.styles.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUser } from '../../models/user-interfaces';

import { connect } from 'react-redux';
import { IReducedState } from '../../redux/root-reducer';

interface IProps {
    currentUser?: CurrentUser;
}

const Header = ({ currentUser }: IProps): JSX.Element => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
            }
        </div>
    </div>
);

const mapStateToProps = (state: IReducedState): IProps => ({
    currentUser: state.userState?.currentUser
});

export default connect(mapStateToProps)(Header);