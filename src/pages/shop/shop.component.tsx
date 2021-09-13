import { Component } from "react";
import SHOP_DATA from "./shop.data";
import { Collection } from "../../models/collection-interfaces";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

interface IState {
    collections: Collection[];
}
class ShopPage extends Component<Record<string, never>, IState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render(): JSX.Element {
        const { collections } = this.state;
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>);
    }
}

export default ShopPage;