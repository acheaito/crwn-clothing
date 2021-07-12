import { ShopItem } from '../../models/shopping-interfaces';
import './collection-preview.styles.scss';

interface IProp {
    title: string;
    items: ShopItem[];
}

const CollectionPreview = ({ title, items }: IProp) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .slice(0, 4)
            .map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    </div>
)

export default CollectionPreview;