import './menu-item.styles.scss';

import { withRouter } from 'react-router';

interface IProp {
    title: string;
    imageUrl: string;
    size: string;
    linkUrl: string;
    history: any;
    match: any;
}

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }: IProp) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem as any);