import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IReducedState, IStateAction } from '../../models/state-interfaces';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartItem from '../cart-item/cart-item.component';

interface IProps {
    toggleCartHidden?: () => void;
    itemCount?: number;
}

const CartIcon = ({ toggleCartHidden, itemCount }: IProps): JSX.Element => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>  
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = (dispatch: Dispatch<IStateAction>): IProps => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
});

const mapStateToProps = (state: IReducedState): IProps => ({
    itemCount: state.cartState?.cartItems?.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 
        0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);