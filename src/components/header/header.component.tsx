import './header.styles.scss';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { CurrentUser } from '../../models/user-interfaces';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { IReducedState } from '../../models/state-interfaces';

interface IProps {
    currentUser?: CurrentUser;
    cartHidden?: boolean;
}

const Header = ({ currentUser, cartHidden }: IProps): JSX.Element => (
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
            <CartIcon />
        </div>       
        { cartHidden ? null : <CartDropdown /> }
    </div>
);

const mapStateToProps = (state: IReducedState): IProps => ({
    currentUser: state?.userState?.currentUser,
    cartHidden: state?.cartState?.cartHidden
});

export default connect(mapStateToProps)(Header);