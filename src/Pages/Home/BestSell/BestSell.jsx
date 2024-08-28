import SectionTitle from '../../Components/SectionTitle';
import Menu from '../../Shared/Items/Menu';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const BestSell = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <Menu
                        key={item._id}
                        item={item}
                    ></Menu>)
                }
            </div>
            <Link className='btn btn-outline border-0 border-b-4 mt-4' to='/menu'>View Full Menu</Link>
        </section>
    );
};

export default BestSell;