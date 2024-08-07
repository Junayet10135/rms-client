import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import CoverMenu from '../../assets/menu/banner3.jpg'
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../Components/SectionTitle';
import MenuTypes from './MenuTypes';
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
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
            <MenuTypes items={desserts} title="dessert" img={dessertImg}></MenuTypes>
            <MenuTypes items={pizza} title={"pizza"} img={pizzaImg}></MenuTypes>
            <MenuTypes items={salad} title={"salad"} img={saladImg}></MenuTypes>
            <MenuTypes items={soup} title={"soup"} img={soupImg}></MenuTypes>
        </div>
    );
};

export default Fullmenu;