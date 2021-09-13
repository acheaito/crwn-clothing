import { CollItem } from '../../models/collection-interfaces';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IStateAction } from '../../models/state-interfaces';
import { addItem } from '../../redux/cart/cart.actions';

interface IProps {
    item: CollItem;
    addItemToCart?: (item: CollItem) => void;    
}

const CollectionItem = ({ addItemToCart, item }: IProps): JSX.Element => {    
    const { name, price, imageUrl } = item;
        
    return (    
        <div className='collection-item'>
            <div 
                className='image'
                style= {{
                    backgroundImage: `url(${imageUrl})`
                }}/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton onClick={() => addItemToCart?.(item)} inverted>Add to cart</CustomButton>
        </div>
    );};

const mapDispatchToProps = (dispatch: Dispatch<IStateAction>, ownProps: IProps): IProps => ({
    ...ownProps,
    addItemToCart: (item: CollItem) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);