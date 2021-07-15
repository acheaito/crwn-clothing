import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IStateAction } from '../../models/state-interfaces';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

interface IProps {
    toggleCartHidden: () => void;
}

const CartIcon = ({ toggleCartHidden }: IProps): JSX.Element => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>  
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch<IStateAction>): IProps => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

export default connect(null, mapDispatchToProps)(CartIcon);