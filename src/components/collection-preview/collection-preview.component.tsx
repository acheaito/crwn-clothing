import { CollItem } from '../../models/shopping-interfaces';
import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';


interface IProps {
    title: string;
    items: CollItem[];
}

const CollectionPreview = ({ title, items }: IProps): JSX.Element => (    
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .slice(0, 4)
                .map((item) => (
                    <CollectionItem key={item.id} {...item} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;