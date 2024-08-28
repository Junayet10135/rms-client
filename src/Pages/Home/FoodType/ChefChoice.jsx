import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import ChefMenu from './ChefMenu';
import { Link } from 'react-router-dom';


const ChefChoice = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="Chefs Recommends"
                subHeading="Try This"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <ChefMenu
                        key={item._id}
                        item={item}
                    ></ChefMenu>)
                }
            </div>
            <Link className='btn btn-outline border-0 border-b-4 mt-4' to='/menu'>View Full Menu</Link>

        </section>
    );
};

export default ChefChoice;