import './home-page.styles.scss';

import Directory from '../../components/directory/directory.component';

const HomePage = (): JSX.Element => (
    <div className='homepage'>
        <Directory />
    </div>
);

export default HomePage;