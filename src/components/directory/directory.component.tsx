import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { Component } from 'react';
import { SectionItem } from '../../models/collection-interfaces';

interface IState {
    sections: SectionItem[];
}

class Directory extends Component<Record<string, never>, IState> {
    constructor(props: Record<string, never>) {
        super(props);

        this.state = {
            sections: this.getSections()
        };
    }

    render(): JSX.Element {
        return (<div className='directory-menu'>
            {this.state.sections.map(({ id, ...otherSectionProps }) =>
                <MenuItem key={id} {...otherSectionProps} />)}
        </div>);
    }

    getSections = (): SectionItem[] => {
        return [
            {                
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'jackets'
            },
            {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'sneakers'
            },
            {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'womens'
            },
            {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'mens'
            }
        ];
    }
}

export default Directory;