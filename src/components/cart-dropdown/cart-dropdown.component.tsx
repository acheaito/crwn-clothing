import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { ICartItem } from '../../models/cart.interfaces';
import { IReducedState } from '../../models/state-interfaces';

interface IProps {
    cartItems?: ICartItem[];
}

const CartDropdown = ({ cartItems }: IProps): JSX.Element => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems?.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state: IReducedState ) => ({
    cartItems: state.cartState?.cartItems
});

export default connect(mapStateToProps)(CartDropdown);