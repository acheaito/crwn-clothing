import './cart-item.styles.scss';
import { ICartItem } from '../../models/cart.interfaces';


interface IProps {
    item: ICartItem;
    addItemToCart?: (item: ICartItem) => void;    
}

const CartItem = ({ item }: IProps): JSX.Element => {
    const { imageUrl, price, name, quantity } = item;

    return <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>            
        </div>
    </div>;
};

export default CartItem;