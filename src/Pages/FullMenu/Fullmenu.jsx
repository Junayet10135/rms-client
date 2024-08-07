import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CoverMenu from '../../assets/menu/banner3.jpg'
const Fullmenu = () => {
    return (
        <div>
            <Helmet>
                <title>Full Menu</title>
            </Helmet>
            <Cover img={CoverMenu} title="Our Menu"></Cover>

        </div>
    );
};

export default Fullmenu;