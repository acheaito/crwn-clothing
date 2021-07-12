import { Component } from "react";
import SHOP_DATA from "./shop.data";
import { Collection } from "../../models/shopping-interfaces";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface IProp {
}

interface IState {
    collections: Collection[];
}
class ShopPage extends Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>)
    }
}

export default ShopPage;