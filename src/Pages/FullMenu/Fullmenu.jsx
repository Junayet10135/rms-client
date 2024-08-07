import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CoverMenu from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Components/SectionTitle';
import MenuTypes from './MenuTypes';
const Fullmenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
                <title>Full Menu</title>
            </Helmet>
            <Cover img={CoverMenu} title="Our Menu"></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            <MenuTypes items={offered}></MenuTypes>
        </div>
    );
};

export default Fullmenu;